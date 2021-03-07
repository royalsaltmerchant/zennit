import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";  
import axios from 'axios'

import '../main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function ResetPassword() {
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('Something went wrong, please try again later!')
  const [alertType, setAlertType] = useState('warning')
  const history = useHistory()
  const {token} = useParams()

  useEffect(() => {
      if(alert) {
        setTimeout(() => {
          setAlert(false)
        }, 5000)
      }
  });

  async function handleSubmit(event) {
    event.preventDefault()
    const password = event.target.password.value

    try {
      const res = await axios({
        method: 'post',
        url: '/api/reset_password',
        data: {
          password: password,
          token: token
        }
      })
      console.log(res)
      if (res.status === 200) {
        setAlert(true)
        setAlertType('success')
        setAlertText('Password Has Been Reset!')
      } else {
        setAlert(true)
        setAlertType('warning')
        setAlertText('Something Went Wrong, Please Try Again Later!')
      }
    } catch (error) {
      console.log(error)
      setAlert(true)
      setAlertType('danger')
      setAlertText('Something Went Wrong, Please Try Again Later!')
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
        <legend className="border-bottom mb-4">New Password</legend>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="password">
            <Form.Label>New Password</Form.Label>
            <Form.Control 
              required
              size="lg"
              type="password"
              placeholder="New Password" />
          </Form.Group>
            <Button variant="outline-info" type="submit">
              Reset Password
            </Button>
        </Form>
      </div>
    </div>
  )
}