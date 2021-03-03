import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="content-section">
          <h3>Sidebar</h3>
          <div className='text-muted'>Sidebar under construction
            <ul className="list-group">
              <li className="list-group-item list-group-item-light">Latest Posts</li>
              <li className="list-group-item list-group-item-light">Announcements</li>
              <li className="list-group-item list-group-item-light">Calendars</li>
              <li className="list-group-item list-group-item-light">etc</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
