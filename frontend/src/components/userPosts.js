import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'
import axios from 'axios'

import ReactHtmlParser from 'react-html-parser'

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
import Spinner from 'react-bootstrap/Spinner'
import '../main.css'

class UserPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postsViewable: 4,
      commentsViewable: 4,
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

  renderDatePosted(date) {
    var moment = require('moment')
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

    return <small className="text-muted">{formattedDate}</small>
  }

  renderArticleContent(content, id) {
    if (content.length > 1000) {
      return(
        <div>
          <div className="article-content">{ReactHtmlParser(content.substr(0, 1000))}</div>
          <Link className="mr-2" to={`/post/${id}`}>Read More</Link>
        </div>
      )
    } else {
      return(
          <div className="article-content">{ReactHtmlParser(content)}</div>
      )
    }
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
    return(
      <div className="mb-3">
        <Link to={`/post/${post}#comment-length`}>Comments({commentsById.length})</Link>
      </div>
    )
  }

  renderCommentEditButtons(commentUser, id) {
    const {user} = this.props

    if(user.username === commentUser || user.admin === true) {
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
          <div className="comment-head">
            <Link className="mr-2" to={`/user_posts/${comment['user.username']}`}>{comment['user.username']}</Link>
            {this.renderDatePosted(comment.date_posted)}
            {this.renderCommentEditButtons(comment['user.username'], comment.id)}
          </div>
          <hr />
          <p className="article-content">{comment.content}</p>
        </div>
      </div>
    ))
    
    return commentsByPost.slice(0, commentsViewable)
  }

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
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
    const {postsViewable} = this.state
    const {username} = this.props.match.params
    const {posts} = this.props
    const userPosts = posts.filter((post) => {
      if(post['user.username'] === username) {
        return true
      }
    })
    const postItems = userPosts.map(post => (
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
            </div>
            <h2><Link className="article-title" to={`/post/${post.id}`}>{post.title}</Link></h2>
            <hr />
            {this.renderArticleContent(post.content, post.id)}
          </Media.Body>
        </Media>
        {this.renderCommentsLength(post.id)}
        {this.renderComments(post.id)}
        {this.renderNewComment(post.id)}
        <hr />
      </div>
      ))
    return postItems.slice(0, postsViewable)
  }

  renderMorePosts(event) {
    const target = event.target
    const {postsViewable} = this.state

    if(target.scrollHeight - target.scrollTop === target.clientHeight) {
      this.setState({
        postsViewable: postsViewable + 2
      }, () => {console.log(postsViewable)})
    }
  }

  render() {
    const {username} = this.props.match.params

    return (
      <div>
        <h1>{username}</h1>
        {this.renderLoader()}
        <div className="scrolling" onScroll={(event) => this.renderMorePosts(event)}>
          {this.renderPostContent()}
        </div>
      </div>
    )
  }
}

UserPosts.propTypes = {
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

export default compose(withRouter, connect(mapStateToProps, { fetchPosts, fetchUser, fetchComments }))(UserPosts)

    