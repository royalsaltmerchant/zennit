import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import Media from 'react-bootstrap/Media'
import '../main.css'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderDatePosted(date) {
    var moment = require('moment')
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

    return <small className="text-muted">{formattedDate}</small>
  }

  renderArticleContent(content, post) {
    if (content.length > 1000) {
      return(
        <div>
          <p className="article-content">{content.substr(0, 1000)}</p>
          <Link className="mr-2" to={`/post/${post.id}`}>Read More</Link>
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

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
  }

  renderPostContent() {
    const postItems = this.props.posts.map(post => (
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
      ))
    return postItems
  }

  render() {
    
    return (
      <div>
        <h1>Home</h1>
        {this.renderPostContent()}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts)