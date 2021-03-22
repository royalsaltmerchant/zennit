import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'

export default function Register(props) {
  const [warningTextUsername, setWarningTextUsername] = useState('')
  const [warningTextPassword, setWarningTextPassword] = useState('')
  const [warningUsernameToggle, setWarningUsernameToggle] = useState(false)
  const [warningPasswordToggle, setWarningPasswordToggle] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertType, setAlertType] = useState('warning')
  const [alertText, setAlertText] = useState('Something went wrong, please try again later!')
  const history = useHistory()

  useEffect(() => {
      if(alert) {
        setTimeout(() => {
          setAlert(false)
        }, 5000)
      }
  });

  function renderAlert() {
    if(alert) {
      return(
        <Alert variant={alertType}>
          {alertText}
        </Alert>
      )
    }
  }

  function renderWarningTextUsername() {
    if(warningUsernameToggle === true) {
      return(
        <Form.Text style={{color: 'red'}}>
          {warningTextUsername}
        </Form.Text>
      )
    }
  }

  function renderWarningTextPassword() {
    if(warningPasswordToggle === true) {
      return(
        <Form.Text style={{color: 'red'}}>
          {warningTextPassword}
        </Form.Text>
      )
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const username = event.target.username.value.trim()
    const email = event.target.email.value.trim()
    const password = event.target.password.value

    if(!warningPasswordToggle && !warningUsernameToggle) {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/register',
          data: {
            username: username,
            email: email,
            password: password
          }
        })
        if(res.status === 201) {
          history.push("/login")
        }
      } catch (error) {
        console.log(error.response)
        if(error.response.status === 400) {
          setAlert(true)
          setAlertType('warning')
          setAlertText('Email or Username is already in use')
        } else {
          setAlert(true)
          setAlertType('danger')
          setAlertText('Something went wrong, please try again later!')
        }
      }
    } else {
      setAlert(true)
      setAlertText('Please Fix Errors Before You Register!')
    }

  }

  function handleUsername(event) {
    const username = event.target.value
    if(username.length >= 20) {
      setWarningUsernameToggle(true)
      setWarningTextUsername('Too Long!')
    } else {
      setWarningUsernameToggle(false)
    }
  }

  function handlePassword(event) {
    const password = event.target.value
    if(password.length > 20) {
      setWarningPasswordToggle(true)
      setWarningTextPassword('Too Long!')
    } else if(password.length < 8 && password.length >= 1) {
      setWarningPasswordToggle(true)
      setWarningTextPassword('Too Short!')
    } else {
      setWarningPasswordToggle(false)
    }
  }

  return (
    <div>
      {renderAlert()}
      <div className="content-section">
        <legend className="border-bottom mb-4">Join Zennit!</legend>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              required
              onChange={(event) => handleUsername(event)}
              size="md" 
              type="username" 
              placeholder="Username" />
            {renderWarningTextUsername()}
            <Form.Text id="passwordHelpBlock" muted>
                Your username must be shorter than 20 characters.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required
              size="md"
              type="email"
              placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              onChange={(event) => handlePassword(event)}
              size="md" 
              type="password" 
              placeholder="Password" 
              aria-describedby="passwordHelpBlock" />
            {renderWarningTextPassword()}
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long.
            </Form.Text>
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
      <div className="border-top pt-3">
        <small className="text-muted">
          Already Have An Account? <Link className="ml-2" to="/login">Sign In</Link>
        </small>
      </div>
    </div>
  )
}
