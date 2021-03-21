import React, { Component } from 'react'
import axios from 'axios'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/usersActions'

import Media from 'react-bootstrap/Media'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import '../main.css'


class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: false,
      alertText: 'Something went wrong, please try again later!',
      alertType: 'warning',
      submission: false
    }
  }

  // when component re-renders
  componentDidUpdate() {
    if(this.state.submission) {
      this.props.fetchUser()
      this.setState({
        submission: false
      })
    }
    if(this.state.alert) {
      setTimeout(() => {
        this.setState({
          alert: false
        })
      }, 5000)
    }
  }

  renderAlert() {
    const {alert, alertText, alertType} = this.state

    if(alert) {
      return(
        <Alert variant={alertType}>
          {alertText}
        </Alert>
      )
    }
  }

  async handleSubmit(event) {
    event.preventDefault()
    const email = event.target.email.value.trim()
    const username = event.target.username.value.trim()
    const imageFile = event.target.imageUpload.files[0]
    var formData = new FormData(event.target)
    formData.append("username", username)
    formData.append("email", email)
    formData.append("image_file", imageFile)
    
    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token"),
          'Content-Type': 'multipart/form-data'
        },
        method: 'post',
        url: '/api/update_user',
        data: formData
      })
      if (res.status === 200) {
        this.setState({
          alert: true,
          alertType: 'success',
          alertText: 'Successfully updated account info!',
          submission: true
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
            alertType: 'danger',
            alertText: 'There was an issue updating your information, please try again later!'
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

  render() {
    const {user} = this.props
    return (
      <div>
        {this.renderAlert()}
        <div className="content-section">
          <Media>
            <img
              width={64}
              height={64}
              className="rounded-circle account-img"
              src={`https://zennitapp.s3.amazonaws.com/${user.image_file}`}
              alt="Current User Profile Avatar"
            />
            <Media.Body>
              <h2 className="account-heading">{user.username}</h2>
              <p className="text-secondary">{user.email}</p>
            </Media.Body>
          </Media>
          <legend className="border-bottom mb-4">Account Info</legend>
          <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
              <Form.Control 
                size="lg"
                type="email"
                placeholder="New Email" />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                size="lg" 
                type="username" 
                placeholder="New Username" />
              <Form.Text id="passwordHelpBlock" muted>
                Your username must be shorter than 20 characters.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.File id="imageUpload" label="Update Profile Picture" accept=".png, .jpg, .jpeg" aria-describedby="imageHelpBlock" name="image_file" />
              <Form.Text id="imagedHelpBlock" muted>
                Your image must be a common format such as: .png .jpg .jpeg
              </Form.Text>
            </Form.Group>
            <Button variant="outline-info" type="submit">
              Update
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

Account.propTypes = {
  fetchUser: Proptypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.users.item
})

export default connect(mapStateToProps, { fetchUser })(Account)
