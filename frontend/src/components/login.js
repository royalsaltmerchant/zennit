import React, { useState } from 'react';
import '../main.css'
import { Link, useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function Login() {
  const [loginStatus, setLoginStatus] = useState(false)
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value
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
      if (res.status == 200) {
        const token = res.data.token
        localStorage.setItem("token", token)
        setLoginStatus(true)
        history.push("/")
        history.go("/")
      } else {
        setLoginStatus(false)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
      <div className="content-section">
        <legend className="border-bottom mb-4">login</legend>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required
              size="lg"
              type="email"
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              size="lg" 
              type="password" 
              placeholder="Password" 
              aria-describedby="passwordHelpBlock" />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Login
          </Button>
        </Form>
      </div>
      <div className="border-top pt-3">
        <small className="text-muted">
          Need An Account? <Link className="ml-2" to="/register">register</Link>
        </small>
      </div>
    </div>
  )
}
