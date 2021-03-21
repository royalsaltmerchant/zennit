import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'

import ReactHtmlParser from 'react-html-parser'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'
import { fetchUser } from '../actions/usersActions'
import { fetchComments } from '../actions/commentActions'
import { fetchReplies } from '../actions/replyActions'

import NewComment from './newComment.js'
import LikeButton from './likeButton.js'

import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import '../main.css'

class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalToggle: false,
      alert: false,
      alertText: 'Something went wrong, please try again later!',
      alertType: 'warning',
      repliesViewable: 2,
      userIs: false
    }
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

  renderLoader() {
    const {posts} = this.props

    if(Object.keys(posts).length === 0) {
      return(
        <Spinner animation="border" style={{margin: '30px'}} />
      )
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

  async handleDeleteReply(id) {
    try {
      const res = await axios({
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        method: 'post',
        url: '/api/delete_reply',
        data: {
          reply_id: id
        }
      })
      if (res.status === 200) {
        this.props.fetchReplies()
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
    const {user} = this.props

    if(user.username === commentUser || user.admin == true) {
      return <Button className="ml-auto delete-comment" onClick={() => this.handleDeleteComment(id)} variant="outline-danger" size="sm"><span>&times;</span></Button>
    }
  }

  renderReplyEditButtons(replyUser, id) {
    const {user} = this.props

    if(user.username === replyUser || user.admin === true) {
      return <Button className="ml-auto delete-comment" onClick={() => this.handleDeleteReply(id)} variant="outline-danger" size="sm"><span>&times;</span></Button>
    }
  }

  renderReplyButton(comment_id, post) {
    const {replies} = this.props
    const repliesById = replies.filter((reply) => {
      if(reply.comment_id == comment_id) {
        return true
      }
    })

    return(
      <Link className="ml-auto px-2" to={`/post/${post}/comment/${comment_id}`}>Replies({repliesById.length})</Link>
    )
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
            src={`https://zennitapp.s3.amazonaws.com/${comment.users.image_file}`}
            alt="current user" 
          /> */}
        <div className="comment-content">
          <div className="comment-head" id="comment-head">
            <Link className="mr-2" to={`/user_posts/${comment.users.username}`}>{comment.users.username}</Link>
            {this.renderDatePosted(comment.date_posted)}
            {this.renderReplyButton(comment.id, post)}
            {this.renderCommentEditButtons(comment.users.username, comment.id)}
          </div>
          <hr />
          <p className="article-content">{comment.content}</p>
        </div>
        {this.renderReplies(comment.id)}
      </div>
    ))
    
    // return commentsByPost.slice(0, commentsViewable)
    return commentsByPost
  }

  renderReplies(comment) {
    const {replies} = this.props
    const {repliesViewable} = this.state
    const repliesById = replies.filter((reply) => {
      if(reply.comment_id == comment) {
        return true
      }
    })

    const repliesByComment = repliesById.map(reply => (
      <div key={reply.id}>
        {/* <img
            className="rounded-circle article-img"
            src={`https://zennitapp.s3.amazonaws.com/${comment.users.image_file}`}
            alt="current user" 
          /> */}
        <div className="comment-content ml-5">
          <div className="comment-head">
            <Link className="mr-2" to={`/user_posts/${reply.users.username}`}>{reply.users.username}</Link>
            {this.renderDatePosted(reply.date_posted)}
            {this.renderReplyEditButtons(reply.users.username, reply.id)}
          </div>
          <hr />
          <p className="article-content">{reply.content}</p>
        </div>
      </div>
    ))
    
    return repliesByComment.slice(0, repliesViewable)
  }

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
  }

  renderEditButtons(postUsername) {
    const {user} = this.props
    const {id} = this.props.match.params

    if(user.username === postUsername || user.admin === true) {
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
            {this.renderProfileImage(post.users.image_file)}
            {this.renderLikeButtons(post)}
          </div>
          <Media.Body>
            <div className="article-metadata">
              <Link className="mr-2" to={`/user_posts/${post.users.username}`}>{post.users.username}</Link>
              {this.renderDatePosted(post.date_posted)}
              {this.renderEditButtons(post.users.username)}
            </div>
            <h2><Link className="article-title" to={`/post/${post.id}`}>{post.title}</Link></h2>
            <hr />
            <div className="article-content">{ReactHtmlParser(post.content)}</div>
          </Media.Body>
        </Media>
        {this.renderCommentsLength(post.id)}
        {this.renderNewComment(post.id)}
        {this.renderComments(post.id)}
        <hr />
      </div>
      ))
    return postItems
  }

  render() {
    const {modalToggle} = this.state

    return (
      <div>
        {this.renderLoader()}
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
  replies: Proptypes.array.isRequired,
  comments: Proptypes.array.isRequired,
  fetchUser: Proptypes.func.isRequired,
  fetchComments: Proptypes.func.isRequired,
  fetchReplies: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item,
  comments: state.comments.items,
  replies: state.replies.items
})

export default compose(withRouter, connect(mapStateToProps, { fetchPosts, fetchUser, fetchComments, fetchReplies }))(SinglePost)