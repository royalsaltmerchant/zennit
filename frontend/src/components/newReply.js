import React, { Component } from 'react'
import axios from 'axios'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchReplies } from '../actions/replyActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row'
import '../main.css'

class NewReply extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: false,
      alertType: 'warning',
      alertText: 'Something went wrong, please try again later!'
    }
  }

  async makeNotification(data) {
    const reply = data.id
    const post = data.post_id
    const user = data.user_id
    const comment = data.comment_id

    try {
      const res = await axios({
        method: 'post',
        url: '/api/new_notification',
        data: {
          notification_type: 'reply',
          user_id: user,
          post_id: post,
          comment_id: comment,
          reply_id: reply
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
    const {post, comment} = this.props
    const content = event.target.reply.value.trim()

    event.preventDefault()
    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        method: 'post',
        url: '/api/new_reply',
        data: {
          post_id: post,
          comment_id: comment,
          content: content
        }
      })
      if (res.status === 201) {
        this.props.fetchReplies()
        this.makeNotification(res.data)
        this.setState({
          alert: true,
          alertType: 'success',
          alertText: 'Reply Successfully Created!'
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
            alertText: 'Please login to reply!'
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
          alertText: 'Please login to reply!'
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
            <Form.Group controlId="reply">
              <Form.Control
                required
                as="textarea"
                size="md"
                cols="50"
                type="reply" 
                placeholder="Expound the dharma..." />
            </Form.Group>
            <Button variant="outline-info" type="submit">
              Reply
            </Button>
          </Form>
        </Media>
      </div>
    )
  }
}

NewReply.propTypes = {
  fetchReplies: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  replies: state.replies.items
})

export default connect(mapStateToProps, { fetchReplies })(NewReply)