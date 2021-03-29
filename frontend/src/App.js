import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/postActions'
import { fetchUser } from './actions/usersActions'
import { fetchComments } from './actions/commentActions'
import { fetchReplies } from './actions/replyActions'
import { fetchNotifications } from './actions/notificationActions'
import { fetchLikes, fetchDislikes } from './actions/likesActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from  './components/nav.js'
import About from './components/about.js'
import Sidebar from './components/sidebar.js'
import Register from './components/register.js'
import Login from './components/login.js'
import Logout from './components/logout.js'
import Account from './components/account.js'
import Posts from './components/posts.js'
import UserPosts from './components/userPosts.js'
import SinglePost from './components/singlePost.js'
import NewPost from './components/newPost.js'
import UpdatePost from './components/updatePost.js'
import ForgotPassword from './components/forgotPassword.js'
import ResetPassword from './components/resetPassword.js'
import Rules from './components/rules.js'
import Resources from './components/resources.js'
import SearchPosts from './components/searchPosts.js'
import Notifications from './components/notifications.js'
import CommentReply from './components/commentReply.js'
import Donations from './components/donations.js'

import './main.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

function App(props) {
  const [authorization, setAuthorization] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('Welcome!')

  const loginMessage = localStorage.getItem("loginMessage")
  const token = localStorage.getItem("token")

  const stripePromise = loadStripe('pk_live_51Ia59aGq9UZ7zid2ybFk81dkDQjwN3zfRN8JAXETNfkH9W1v06voGmL5q5AHZhTKUuYIUiIGmYKTg9YQm0xgjkSd00WQoask1c');


  useEffect(() => {
    const {fetchLikes, fetchDislikes, fetchUser, fetchNotifications, fetchComments, fetchReplies, fetchPosts} = props
    fetchNotifications()
    fetchComments()
    fetchReplies()
    fetchPosts()
    fetchLikes()
    fetchDislikes()
    fetchUser()
  }, [])

  useEffect(() => {
    userAuthenticated()
  }, [authorization || !token])

  function renderAlert() {
    if(alert && authorization && loginMessage) {
      setTimeout(() => {
        setAlert(false)
        setAlertText("Welcome!")
        localStorage.removeItem("loginMessage")
      }, 5000)
      return(
        <Alert className="alert-home" variant="success">
          {alertText}
        </Alert>
      )
    }
  }

  async function userAuthenticated() {
    if(!token) {
      setAuthorization(false)
    } else {
      try {
        const res = await axios({
          method: 'get',
          url: '/api/verify_jwt',
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        })
        if(res.status === 200) {
          setAuthorization(true)
          setAlert(true)
          setAlertText('Login Successful! Welcome Back!')
        } else {
          console.log('Token is invalid')
          localStorage.removeItem("token")
        }
      } catch {
        console.log('could not connect to authorization check')
        localStorage.removeItem("token")
      }
    }
  }

  function renderNotificationsButton() {
    const {user, notifications, fetchNotifications} = props
    if(Object.keys(user).length !== 0) {
      return(
        <Notifications user={user} notifications={notifications} fetchNotifications={fetchNotifications} />
      )
    }
  }

  return (
    <Elements stripe={stripePromise}>
      <Router>
        <div className="main-body">
          <Navigation authorization={authorization}/>
          <Container>
              <Row>
                <div className="col-md-8">
                  {renderAlert()}
                  {renderNotificationsButton()}
                  <Switch>
                    <Route exact path="/">
                      <Posts authorization={authorization} />
                    </Route>
                    <Route path="/home">
                      <Posts authorization={authorization} />
                    </Route>
                    <Route path="/search/:input">
                      <SearchPosts />
                    </Route>
                    <Route path="/user_posts/:username">
                      <UserPosts authorization={authorization} />
                    </Route>
                    <Route exact path="/post/:id">
                      <SinglePost authorization={authorization} />
                    </Route>
                    <Route path="/update/post/:id">
                      <UpdatePost />
                    </Route>
                    <Route exact path="/post/:post_id/comment/:comment_id">
                      <CommentReply />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/rules">
                      <Rules />
                    </Route>
                    <Route path="/donations">
                      <Donations />
                    </Route>
                    <Route path="/resources">
                      <Resources />
                    </Route>
                    <Route path="/account">
                      <Account />
                    </Route>
                    <Route path="/forgot_password">
                      <ForgotPassword />
                    </Route>
                    <Route path="/reset_password/:token">
                      <ResetPassword />
                    </Route>
                    <Route path="/register">
                      <Register />
                    </Route>
                    <Route path="/new_post">
                      <NewPost />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/logout">
                      <Logout />
                    </Route>
                  </Switch>
                </div>
                <Sidebar />
              </Row>
            </Container>
        </div>
      </Router>
    </Elements>
  );
}

App.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  fetchUser: Proptypes.func.isRequired,
  fetchComments: Proptypes.func.isRequired,
  fetchReplies: Proptypes.func.isRequired,
  fetchNotifications: Proptypes.func.isRequired,
  fetchLikes: Proptypes.func.isRequired,
  fetchDislikes: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  user: state.users.item,
  comments: state.comments.items,
  replies: state.replies.items,
  notifications: state.notifications.items
})

export default connect(mapStateToProps, { fetchPosts, fetchUser, fetchComments, fetchReplies, fetchNotifications, fetchLikes, fetchDislikes })(App)
