import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="content-section">
          <h3>Expedients</h3>
          <div className='text-muted'>
            <ListGroup>
              <ListGroup.Item>
                <Link to="/about">About</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/rules">Rules</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/resources">Resources</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/donations">Donations</Link>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Link to="/users_list">Users</Link>
              </ListGroup.Item> */}
              {/* <ListGroup.Item>
                <Link to="/about">About</Link>
              </ListGroup.Item> */}
            </ListGroup>
          </div>
        </div>
      </div>
    )
  }
}
