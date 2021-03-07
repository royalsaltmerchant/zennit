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
  const [alertType, setAlertType] = useState('warning')
  const history = useHistory()

  useEffect(() => {
      if(alert) {
        setTimeout(() => {
          setAlert(false)
        }, 9000)
      }
  });

  async function handleSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value.trim()

    try {
      const res = await axios({
        method: 'post',
        url: '/api/request_reset_email',
        data: {
          email: email
        }
      })
      console.log(res)
      if (res.status === 200) {
        setAlert(true)
        setAlertType('success')
        setAlertText('Request Sent! Check Email For Password Reset Link!')
      } else {
        setAlert(true)
        setAlertType('warning')
        setAlertText('Something Went Wrong, Please Try Again Later!')
      }
    } catch (error) {
      console.log(error.response)
      if(error.response.status === 400) {
        setAlert(true)
        setAlertType('warning')
        setAlertText('No User Found By This Email! Try Again!')
      } else {
        setAlert(true)
        setAlertType('danger')
        setAlertText('Something Went Wrong, Please Try Again Later!')
      }
    }
    
  }

  function renderAlert() {
    if(alert) {
      return(
        <Alert variant={alertType}>
          {alertText}
        </Alert>
      )
    }
  }

  return (
    <div>
      {renderAlert()}
      <div className="content-section">
        <legend className="border-bottom mb-4">Reset Password</legend>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required
              size="lg"
              type="email"
              placeholder="Account Email" />
          </Form.Group>
            <Button variant="outline-info" type="submit">
              Request Password Reset
            </Button>
        </Form>
      </div>
    </div>
  )
}