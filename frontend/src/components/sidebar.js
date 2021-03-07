import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="content-section">
          <h3>Sidebar</h3>
          <div className='text-muted'>Sidebar under construction
            <ListGroup>
              <ListGroup.Item className="list-group-item list-group-item-light">Latest Posts</ListGroup.Item>
              <ListGroup.Item className="list-group-item list-group-item-light">Announcements</ListGroup.Item>
              <ListGroup.Item className="list-group-item list-group-item-light">Calendars</ListGroup.Item>
              <ListGroup.Item className="list-group-item list-group-item-light">etc</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    )
  }
}
