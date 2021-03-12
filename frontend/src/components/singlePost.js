import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'
import { fetchUser } from '../actions/usersActions'
import { fetchComments } from '../actions/commentActions'

import NewComment from './newComment.js'
import LikeButton from './likeButton.js'

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
      alertType: 'warning',
      commentsViewable: 4,
      userIs: false
    }
  }

  componentDidMount() {
    const {fetchPosts, fetchComments} = this.props

    fetchPosts()
    fetchComments()
  }

  componentDidUpdate(prevProps) {
    const {user, fetchUser, fetchComments, authorization, comments} = this.props

    if(prevProps.authorization !== authorization) {
      fetchUser()
    }
    
    if(prevProps.user !== user) {
      this.renderNewComment()
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

  async handleDeleteComment(id) {
    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        method: 'post',
        url: '/api/delete_comment',
        data: {
          comment_id: id
        }
      })
      if (res.status === 200) {
        this.props.fetchComments()
      } 
    } catch (error) {
      console.log(error.response)
    }
  }

  renderNewComment(post) {
    const {user} = this.props

      if(Object.keys(user).length !== 0) {
        return(
          <NewComment post={post} user={user} />
        )
      }
  }

  renderCommentsLength(post) {
    const {comments} = this.props
    const commentsById = comments.filter((comment) => {
      if(comment.post_id == post) {
        return true
      }
    })
    return <p id="comment-length">Comments({commentsById.length})</p>
  }

  renderCommentEditButtons(commentUser, id) {
    const {username} = this.props.user

    if(username === commentUser && localStorage.getItem("token")) {
      return <Button className="ml-auto delete-comment" onClick={() => this.handleDeleteComment(id)} variant="outline-danger" size="sm"><span>&times;</span></Button>
    }
  }

  renderComments(post) {
    const {comments} = this.props
    const {commentsViewable} = this.state
    const commentsById = comments.filter((comment) => {
      if(comment.post_id == post) {
        return true
      }
    })

    const commentsByPost = commentsById.map(comment => (
      <div key={comment.id}>
        {/* <img
            className="rounded-circle article-img"
            src={`https://zennitapp.s3.amazonaws.com/${comment['user.image_file']}`}
            alt="current user" 
          /> */}
        <div className="comment-content">
          <div className="comment-head" id="comment-head">
            <Link className="mr-2" to={`/user_posts/${comment['user.username']}`}>{comment['user.username']}</Link>
            {this.renderDatePosted(comment.date_posted)}
            {this.renderCommentEditButtons(comment['user.username'], comment.id)}
          </div>
          <hr />
          <p className="article-content">{comment.content}</p>
        </div>
      </div>
    ))
    
    // return commentsByPost.slice(0, commentsViewable)
    return commentsByPost
  }

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
  }

  renderEditButtons(postUsername) {
    const {username} = this.props.user
    const {id} = this.props.match.params

    if(username === postUsername && localStorage.getItem("token")) {
      return(
        <div>
          <Button as={Link} className="mt-1 mb-1" size="sm" to={`/update/post/${id}`}>Update</Button>
          <Button onClick={() => this.handleModalToggle()} className="m-1" variant="danger" size="sm">Delete</Button>
        </div>
      )
    }
  }

  renderLikeButtons(post) {
    const {user} = this.props
    if(Object.keys(user).length !== 0) {
      return(
        <LikeButton post={post.id}/>
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
      <div key={post.id}>
        <Media className="content-section">
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {this.renderProfileImage(post['user.image_file'])}
            {this.renderLikeButtons(post)}
          </div>
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
        {this.renderCommentsLength(post.id)}
        {this.renderComments(post.id)}
        {this.renderNewComment(post.id)}
        <hr />
      </div>
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
  fetchUser: Proptypes.func.isRequired,
  fetchComments: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item,
  comments: state.comments.items
})

export default compose(withRouter, connect(mapStateToProps, { fetchPosts, fetchUser, fetchComments }))(SinglePost)