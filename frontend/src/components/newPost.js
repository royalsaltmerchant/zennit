import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'

import '../main.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function NewPost() {
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('Something went wrong, please try again later!')
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    const title = event.target.title.value.trim()
    const content = event.target.content.value.trim()

    try {
      const res = await axios({
        method: 'post',
        url: '/api/create_post',
        data: {
          title: title,
          content: content
        }
      })
      console.log(res)
      if (res.status === 200) {
        history.replace("/")
        history.go("/")
      } else {
        setAlert(true)
      }
    } catch (error) {
      console.log(error.response)
      setAlert(true)
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
        <legend className="border-bottom mb-4">New Post</legend>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                required
                size="lg"
                type="title"
                placeholder="Post Title" />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                required
                as="textarea"
                rows="10"
                size="lg" 
                type="content" 
                placeholder="Post Content" />
            </Form.Group>
              <Button variant="outline-info" type="submit">
                Post
              </Button>
          </Form>
      </div>
    </div>
  )
}
