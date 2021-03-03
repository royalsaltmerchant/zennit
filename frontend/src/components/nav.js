import React, { Component } from 'react'
import '../main.css'
import { Link } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props)
    
  }

  renderNavbarAccountOptions() {
    if(false) {
      return(
        <div  className="navbar-nav">
          <Link className="nav-item nav-link" to="/newpost">New Post</Link>
          <img className="rounded-circle nav-user-img" src="{{ get_image_file(current_user.image_file) }}" alt="" />
          <Link className="nav-item nav-link" to="/account">Account</Link>
          <Link className="nav-item nav-link" to="/home">Logout</Link>
        </div>
      )
    } else {
      return(
        <div  className="navbar-nav">
          <Link className="nav-item nav-link" to="/login">Login</Link>
          <Link className="nav-item nav-link" to="/register">Register</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-color fixed-top">
          <div className="container">
            <Link className="navbar-brand mr-4" to="/home">Zennit</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <div className="navbar-nav mr-auto">
                <Link className="nav-item nav-link" to="/home">Home</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
              </div>
              {/* <!-- Navbar Right Side --> */}
              {this.renderNavbarAccountOptions()}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
