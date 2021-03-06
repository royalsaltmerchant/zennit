import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'
import { fetchUser } from '../actions/usersActions'

import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import '../main.css'

class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalToggle: false,
      alert: false,
      alertText: 'Something went wrong, please try again later!',
      alertType: 'warning'
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
    if(localStorage.getItem("token")) {
      this.props.fetchUser()
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

  handleModalToggle() {
    const {modalToggle} = this.state
    this.setState({
      modalToggle: !modalToggle
    })
  }

  async handleDeletePost() {
    const {id} = this.props.match.params

    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        method: 'post',
        url: '/api/delete_post',
        data: {
          post_id: id
        }
      })
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("deletePost", true)
        this.props.history.replace("/")
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

  renderDatePosted(date) {
    var moment = require('moment')
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

    return <small className="text-muted">{formattedDate}</small>
  }

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
  }

  renderEditButtons(postUsername) {
    const {username} = this.props.user
    if(username === postUsername && localStorage.getItem("token")) {
      return(
        <div>
          <a className="btn btn-secondary btn-sm mt-1 mb-1" href="{{ url_for('posts.update_post', post_id=post.id) }}">Update</a>
          <Button onClick={() => this.handleModalToggle()} className="m-1" variant="danger" size="sm">Delete</Button>
        </div>
      )
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
    const postItems = postsById.map(post => (
      <Media className="content-section" key={post.id}>
        {this.renderProfileImage(post['user.image_file'])}
        <Media.Body>
          <div className="article-metadata">
            <Link className="mr-2" to={`/user_posts/${post['user.username']}`}>{post['user.username']}</Link>
            {this.renderDatePosted(post.date_posted)}
            {this.renderEditButtons(post['user.username'])}
          </div>
          <h2><Link className="article-title" to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p className="article-content">{post['content']}</p>
        </Media.Body>
      </Media>
      ))
    return postItems
  }

  render() {
    const {modalToggle} = this.state

    return (
      <div>
        {this.renderAlert()}
        {this.renderPostContent()}
        {/* <!-- Modal --> */}
        <Modal className="fade" show={modalToggle}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Delete Post?</Modal.Title>
              <Button onClick={() => this.handleModalToggle()} variant="close">
                <span>&times;</span>
              </Button>
            </Modal.Header>
            <Modal.Footer>
              <Button onClick={() => this.handleModalToggle()} variant="secondary">Close</Button>
              <Button onClick={() => this.handleDeletePost()} variant="danger" value="delete" type="submit">Delete</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    )
  }
}

SinglePost.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
  fetchUser: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item
})

export default compose(withRouter,connect(mapStateToProps, { fetchPosts, fetchUser }))(SinglePost)