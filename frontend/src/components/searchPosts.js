import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

import ReactHtmlParser from 'react-html-parser'

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchPosts } from '../actions/postActions'

import Media from 'react-bootstrap/Media'
import Spinner from 'react-bootstrap/Spinner'
import '../main.css'

class SearchPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postsViewable: 4
    }
  }

  componentDidMount() {
    const {fetchPosts} = this.props

    fetchPosts()
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

  renderProfileImage(userImage) {
    return <img className="rounded-circle article-img" src={`https://zennitapp.s3.amazonaws.com/${userImage}`} alt="" />
  }

  renderPostContent() {
    const {postsViewable} = this.state
    const {input} = this.props.match.params
    const {posts} = this.props
    const searchPosts = posts.filter((post) => {
      const search = input.toLowerCase()
      const user = JSON.stringify(post['user.username'].toLowerCase())
      const content = JSON.stringify(post.content.toLowerCase())
      const title = JSON.stringify(post.title.toLowerCase())

      if(content.includes(search) || title.includes(search) || user.includes(search)) {
        return true
      }
    })
    if(Object.keys(searchPosts).length === 0) {
      return(
        <h1>Sorry we couldn't find anything!</h1>
      )
    }

    const postItems = searchPosts.map(post => (
      <div key={post.id}>
        <Media className="content-section">
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {this.renderProfileImage(post['user.image_file'])}
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
    return (
      <div>
        {this.renderLoader()}
        <div className="scrolling" onScroll={(event) => this.renderMorePosts(event)}>
          {this.renderPostContent()}
        </div>
      </div>
    )
  }
}

SearchPosts.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.array.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.items,
})

export default compose(withRouter, connect(mapStateToProps, { fetchPosts }))(SearchPosts)