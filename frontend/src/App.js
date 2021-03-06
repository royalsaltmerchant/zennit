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

import './main.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'


function App() {
  const [authorization, setAuthorization] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('Welcome!')

  useEffect(() => {
    userAuthenticated()
  });

  function renderAlert() {
    if(alert) {
      setTimeout(() => {
        setAlert(false)
        localStorage.setItem("loginMessage", true)
      }, 5000)
      return(
        <Alert variant="success">
          {alertText}
        </Alert>
      )
    }
  }

  async function userAuthenticated() {
    let token = localStorage.getItem("token")
    let loginMessage = localStorage.getItem("loginMessage")
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
        console.log(res)
        if(res.status === 200) {
          setAuthorization(true)
          if(!loginMessage) {
            setAlert(true)
            setAlertText('Successful Login!')
          } else {
            setAlert(false)
          }
        } else {
          console.log('Token is invalid')
        }
      } catch {
        console.log('could not connect to authorization check')
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
                      <Posts />
                    </Route>
                    <Route path="/home">
                      <Posts />
                    </Route>
                    <Route path="/user_posts/:username">
                      <UserPosts />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/account">
                      <Account />
                    </Route>
                    <Route path="/register">
                      <Register />
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
