import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './components/store.js'

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

import './main.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'


function App() {
  const [authorization, setAuthorization] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('Welcome!')

  const loginMessage = localStorage.getItem("loginMessage")
  const token = localStorage.getItem("token")

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

  return (
    <Provider store={store}>
      <Router>
        <div className="main-body">
          <Navigation authorization={authorization}/>
          <Container>
              <Row>
                <div className="col-md-8">
                  {renderAlert()}
                  <Switch>
                    <Route exact path="/">
                      <Posts authorization={authorization} />
                    </Route>
                    <Route path="/home">
                      <Posts authorization={authorization} />
                    </Route>
                    <Route path="/user_posts/:username">
                      <UserPosts authorization={authorization} />
                    </Route>
                    <Route path="/post/:id">
                      <SinglePost authorization={authorization} />
                    </Route>
                    <Route path="/update/post/:id">
                      <UpdatePost />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/rules">
                      <Rules />
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
    </Provider>
  );
}

export default App;
