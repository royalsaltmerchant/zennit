import React, { Component } from 'react'
import axios from 'axios'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/commentActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row'
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

  async makeNotification(data) {
    const comment = data.id
    const post = data.post_id
    const user = data.user_id

    try {
      const res = await axios({
        method: 'post',
        url: '/api/new_notification',
        data: {
          notification_type: 'comment',
          user_id: user,
          post_id: post,
          comment_id: comment
        }
      })
      // if (res.status === 201) {
      //   console.log('success new notification')
      // }
    } catch(error) {
      console.log(error)
    }
  }

  async handleSubmit(event) {
    const {post} = this.props
    const content = event.target.comment.value.trim()

    event.preventDefault()
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
      if (res.status === 201) {
        this.props.fetchComments()
        this.makeNotification(res.data)
        this.setState({
          alert: true,
          alertType: 'success',
          alertText: 'Comment Successfully Created!'
        })
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
            alert: true,
            alertType: 'warning',
            alertText: 'Something went wrong, please try again later!'
          })
        }
      } else {
        this.setState({
          alert: true,
          alertType: 'warning',
          alertText: 'Something went wrong, please try again later!'
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
        {this.renderAlert()}
        <Media>
          <img
            className="rounded-circle article-img"
            src={`https://zennitapp.s3.amazonaws.com/${user.image_file}`}
            alt="current user" 
          />
          <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Group controlId="comment">
              <Form.Control
                required
                as="textarea"
                size="md"
                cols="55"
                type="comment" 
                placeholder="Expound the dharma..." />
            </Form.Group>
            <Button variant="outline-info" type="submit">
              Comment
            </Button>
          </Form>
        </Media>
      </div>
    )
  }
}

NewComment.propTypes = {
  fetchComments: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  comments: state.comments.items
})

export default connect(mapStateToProps, { fetchComments })(NewComment)
