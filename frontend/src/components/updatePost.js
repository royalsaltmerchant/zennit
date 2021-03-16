import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'
import { fetchUser } from '../actions/usersActions'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import '../main.css'

class UpdatePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalToggle: false,
      alert: false,
      alertText: 'Something went wrong, please try again later!',
      alertType: 'warning',
      value: ''
    }
  }

  componentDidUpdate() {
    const {alert} = this.state

    if(alert) {
      setTimeout(() => {
        this.setState({
          alert: false
        })
      }, 5000)
    }
  }

  renderAlert() {
    const {alert, alertType, alertText} = this.state

    if(alert) {
      return(
        <Alert variant={alertType}>
          {alertText}
        </Alert>
      )
    }
  }

  async handleUpdatePost(event) {
    event.preventDefault()
    const {id} = this.props.match.params
    const title = event.target.title.value.trim()
    const content = this.state.value.trim()

    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        method: 'post',
        url: '/api/update_post',
        data: {
          title: title,
          content: content,
          post_id: id
        }
      })
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("updatePost", true)
        this.props.history.replace("/")
        this.props.history.go("/")
      } else {
        this.setState({
          alert: true
        })
      }
    } catch (error) {
      console.log(error.response)
      this.setState({
        alert: true
      })
    }
  }

  renderPostContent() {
    const {id} = this.props.match.params
    const {posts} = this.props
    const postsById = posts.filter((post) => {
      if(post.id == id) {
        return true
      }
    })
    const updatePostForm = postsById.map(post => (
      <div className="content-section" key={post.id}>
          <legend className="border-bottom mb-4">{post.title}</legend>
          <Form onSubmit={(event) => this.handleUpdatePost(event)}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                required
                size="lg"
                type="title"
                defaultValue={post.title} />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                required
                as={CKEditor}
                type="content"
                editor={ClassicEditor}
                onChange={(e, editor) => this.handleChange(e, editor)}
                data={this.state.value || post.content  }
                config={ {
                  toolbar: ['heading', 'bold', 'italic', 'link', 'numberedList', 'bulletedList', 'blockQuote', ]
                } }
              />
            </Form.Group>
              <Button variant="outline-info" type="submit">
                Update
              </Button>
          </Form>
        </div>
    ))
    return updatePostForm
  }

  handleChange(e, editor) {
    const data = editor.getData()
    this.setState({
      value: data
    })
  }

  render() {

    return (
      <div>
        {this.renderAlert()}
        {this.renderPostContent()}
        
    </div>
    )
  }
}

UpdatePost.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
  fetchUser: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item
})

export default compose(withRouter,connect(mapStateToProps, { fetchPosts, fetchUser }))(UpdatePost)