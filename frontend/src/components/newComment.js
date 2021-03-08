import React, { Component } from 'react'
import axios from 'axios'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import '../main.css'

class NewComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentsViewable: 4,
      alert: false,
      alertType: 'warning',
      alertText: 'Something went wrong, please try again later!'
    }
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  async handleSubmit(event) {
    const {post} = this.props.post
    const content = event.target.content.value.trim()

    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        method: 'post',
        url: '/api/new_comment',
        data: {
          post_id: post,
          content: content
        }
      })
      console.log(res)
      if (res.status === 201) {
        console.log(res)
      } else {
        this.setState({
          alert: true
        })
      }
    } catch (error) {
      if(error.response) {
        console.log(error.response)
        if(error.response.status === 400) {
          this.setState({
            alert: true,
            alertType: 'warning',
            alertText: 'Please login to comment!'
          })
        } else if(error.response.status === 500) {
          this.setState({
            alert: true
          })
        }
      } else {
        this.setState({
          alert: true
        })
      }
    }
  }

  renderAlert() {
    const {alert, alertText, alertType} = this.state

    if(alert) {
      setTimeout(() => {
        this.setState({
          alert: false,
          alertType: 'warning',
          alertText: 'Please login to comment!'
        })
      }, 5000)
      return(
        <Alert variant={alertType}>
          {alertText}
        </Alert>
      )
    }
  }

  render() {
    const {user} = this.props

    return (
      <div>
        {this.renderAlert}
        <img 
          width={30}
          height={30}
          className="rounded-circle article-img"
          src={`https://zennitapp.s3.amazonaws.com/${user.image_file}`}
          alt="current user" 
        />
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              size="md"
              type="comment" 
              placeholder="Dharma comment..." />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Comment
          </Button>
        </Form>
      </div>
    )
  }
}

NewComment.propTypes = {
  fetchUser: Proptypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.users.item
})

export default connect(mapStateToProps, { fetchUser })(NewComment)
