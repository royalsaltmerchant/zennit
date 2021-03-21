import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useParams } from 'react-router'
import axios from 'axios'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/commentActions'
import { fetchReplies } from '../actions/replyActions'

import NewReply from './newReply.js'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import '../main.css'

function CommentReply(props) {
  const {post_id, comment_id} = useParams()

  function renderDatePosted(date) {
    var moment = require('moment')
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

    return <small className="text-muted">{formattedDate}</small>
  }

  async function handleDeleteReply(id) {
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
        props.fetchReplies()
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  function renderReplyEditButtons(replyUser, id) {
    const {user} = props

    if(user.username === replyUser || user.admin === true) {
      return <Button className="ml-auto delete-comment" onClick={() => handleDeleteReply(id)} variant="outline-danger" size="sm"><span>&times;</span></Button>
    }
  }

  function renderComment() {
    const {comments} = props
    const commentsById = comments.filter((comment) => {
      if(comment.id == comment_id) {
        return true
      }
    })

    const commentById = commentsById.map(comment => (
      <div key={comment.id}>
        {/* <img
            className="rounded-circle article-img"
            src={`https://zennitapp.s3.amazonaws.com/${comment.users.image_file}`}
            alt="current user" 
          /> */}
        <div className="comment-content">
          <div className="comment-head">
            <Link className="mr-2" to={`/user_posts/${comment.users.username}`}>{comment.users.username}</Link>
            {renderDatePosted(comment.date_posted)}
          </div>
          <hr />
          <p className="article-content">{comment.content}</p>
        </div>
        {renderReplies(comment.id)}
      </div>
    ))
    
    return commentById
  }

  function renderReplies(comment) {
    const {replies} = props
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
            {renderDatePosted(reply.date_posted)}
            {renderReplyEditButtons(reply.users.username, reply.id)}
          </div>
          <hr />
          <p className="article-content">{reply.content}</p>
        </div>
      </div>
    ))
    
    return repliesByComment
  }

  function renderNewReply() {
    const {user} = props

      if(Object.keys(user).length !== 0) {
        return(
          <NewReply post={post_id} user={user} comment={comment_id} />
        )
      }
  }

  return (
    <div>
      {renderComment()}
      {renderNewReply()}
      <br />
    </div>
  )
}

CommentReply.propTypes = {
  posts: Proptypes.array.isRequired,
  replies: Proptypes.array.isRequired,
  comments: Proptypes.array.isRequired,
  fetchComments: Proptypes.func.isRequired,
  fetchReplies: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item,
  comments: state.comments.items,
  replies: state.replies.items
})

export default connect(mapStateToProps, { fetchComments, fetchReplies })(CommentReply)
