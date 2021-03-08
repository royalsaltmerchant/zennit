import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import { fetchUser } from '../actions/usersActions'

import NewComment from './newComment.js'

import Media from 'react-bootstrap/Media'
import '../main.css'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postsViewable: 4
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchUser()
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
          <p className="article-content">{content.substr(0, 1000)}</p>
          <Link className="mr-2" to={`/post/${id}`}>Read More</Link>
        </div>
      )
    } else {
      return(
        <div>
          <p className="article-content">{content}</p>
        </div>
      )
    }
  }

  renderNewComment(post) {
    const {user} = this.props

    if(user) {
      return(
        <div className="content-section">
          <NewComment post={post}></NewComment>
        </div>
      )
    }
  }

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
  }

  renderPostContent() {
    const {postsViewable} = this.state
    const postItems = this.props.posts.map(post => (
      <div>
        <Media className="content-section" key={post.id}>
          {this.renderProfileImage(post['user.image_file'])}
          <Media.Body>
            <div className="article-metadata">
              <Link className="mr-2" to={`/user_posts/${post['user.username']}`}>{post['user.username']}</Link>
              {this.renderDatePosted(post.date_posted)}
            </div>
            <h2><Link className="article-title" to={`/post/${post.id}`}>{post.title}</Link></h2>
            {this.renderArticleContent(post.content, post.id)}
          </Media.Body>
        </Media>
        {this.renderNewComment(post.id)}
      </div>
      ))
    return postItems.slice(0, postsViewable)
  }

  renderMorePosts(event) {
    const target = event.target
    const {postsViewable} = this.state
    const {posts} = this.props

    if(target.scrollHeight - target.scrollTop === target.clientHeight && postsViewable !== posts.length) {
      this.setState({
        postsViewable: postsViewable + 2
      }, () => {console.log(postsViewable)})
    }
  }

  render() {
    
    return (
      <div className="scrolling" onScroll={(event) => this.renderMorePosts(event)}>
        <h1>Home</h1>
        {this.renderPostContent()}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
  fetchUser: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item
})

export default connect(mapStateToProps, { fetchPosts, fetchUser })(Posts)