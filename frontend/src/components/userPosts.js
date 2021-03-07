import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'
import Media from 'react-bootstrap/Media'
import '../main.css'

class UserPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postsViewable: 2
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
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

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
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
    const {username} = this.props.match.params
    return (
      <div className="scrolling" onScroll={(event) => this.renderMorePosts(event)}>
        <h1>{username}</h1>
        {this.renderPostContent()}
      </div>
    )
  }
}

UserPosts.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default compose(withRouter,connect(mapStateToProps, { fetchPosts }))(UserPosts)