import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function Register(props) {
  // const [value, setValue] = useState('')
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    history.push("/login")
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value

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
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div>
      <div className="content-section">
        <legend className="border-bottom mb-4">Join Zennit!</legend>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control required
              size="lg" 
              type="username" 
              placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              required
              size="lg"
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
              size="lg" 
              type="password" 
              placeholder="Password" 
              aria-describedby="passwordHelpBlock" />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers, and
              must not contain spaces, special characters, or emoji.
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
