import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'
import Media from 'react-bootstrap/Media'
import '../main.css'

class SinglePost extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  renderDatePosted(date) {
    var moment = require('moment')
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

    return <small className="text-muted">{formattedDate}</small>
  }

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
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
          </div>
          <h2><Link className="article-title" to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p className="article-content">{post['content']}</p>
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

SinglePost.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default compose(withRouter,connect(mapStateToProps, { fetchPosts }))(SinglePost)