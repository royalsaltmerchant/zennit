import React, { Component } from 'react'
import '../main.css'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Container from 'react-bootstrap/Container'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    
  }

  renderNavbarAccountOptions() {
    if(this.props.authorization) {
      return(
        <Nav>
          <NavItem >
            <Nav.Link as={Link} to="/new_post">New Post</Nav.Link>
          </NavItem>
          {/* <img class="rounded-circle nav-user-img" src="{{ get_image_file(current_user.image_file) }}" alt=""></img> */}
          <NavItem>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </NavItem>
        </Nav>
      )
    } else {
      return(
        <Nav>
          <NavItem >
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </NavItem>
        </Nav>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar expand="md" bg="color" variant="dark" collapseOnSelect>
          <Container>
            <img
              width={30}
              height={30}
              className="zencircle"
              src={`https://zennitapp.s3.amazonaws.com/zencircle.png`}
              alt="zennit zen circle"
            />
            <Navbar.Brand as={Link} className="mr-4" to="/home">Zennit</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarToggle" />
            <Navbar.Collapse id="navbarToggle">
              <Nav className="mr-auto">
                <NavItem>
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </NavItem>
                {/* <NavItem>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                </NavItem> */}
              </Nav>
              {/* <!-- Navbar Right Side --> */}
              {this.renderNavbarAccountOptions()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
