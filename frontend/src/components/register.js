import React, { Component } from 'react'
import { Route, Link, Redirect } from "react-router-dom";
import Login from './login'
import '../main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      redirect: false
    }

  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.password.value)
  }

  render() {
    return (
      <div>
        <div className="content-section">
          <legend className="border-bottom mb-4">Join Zennit!</legend>
          <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Group controlId="username">
              <Form.Label>Password</Form.Label>
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
}
