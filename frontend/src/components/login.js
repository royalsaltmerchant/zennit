import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";  
import axios from 'axios'

import '../main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function Login() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('Something went wrong, please try again later!')
  const history = useHistory()

  useEffect(() => {
    localStorage.removeItem("loginMessage")
    if(alert) {
      if(alert) {
        setTimeout(() => {
          setAlert(false)
        }, 5000)
      }
    }
  });

  async function handleSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value.trim()
    const password = event.target.password.value

    try {
      const res = await axios({
        method: 'post',
        url: '/api/login',
        data: {
          email: email,
          password: password
        }
      })
      console.log(res)
      if (res.status === 200) {
        const token = res.data.token
        localStorage.setItem("token", "Bearer " + token)
        setLoginStatus(true)
        history.replace("/")
        history.go("/")
      } else {
        setLoginStatus(false)
        setAlert(true)
      }
    } catch (error) {
      setLoginStatus(false)
      console.log(error.response)
      if(error.response.status === 400) {
        setAlert(true)
        setAlertText('Incorrect Email or Password')
      } else {
        setAlert(true)
      }
    }
    
  }

  function renderAlert() {
    if(alert) {
      return(
        <Alert variant="danger">
          {alertText}
        </Alert>
      )
    }
  }

  return (
    <div>
      {renderAlert()}
      <div className="content-section">
        <legend className="border-bottom mb-4">Login</legend>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required
              size="lg"
              type="email"
              placeholder="Account Email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              size="lg" 
              type="password" 
              placeholder="Account Password" />
          </Form.Group>
            <Button variant="outline-info" type="submit">
              Login
            </Button>
            <small className="text-muted ml-2">
              <Link to="/reset_password">Forgot Password?</Link>
            </small>
        </Form>
      </div>
      <div className="border-top pt-3">
        <small className="text-muted">
          Need An Account? <Link className="ml-2" to="/register">Sign Up Here!</Link>
        </small>
      </div>
    </div>
  )
}
