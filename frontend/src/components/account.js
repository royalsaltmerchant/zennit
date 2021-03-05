import React from 'react'
import Media from 'react-bootstrap/Media'

export default function Account() {
  return (
    <div>
      <div className="content-section">
        <Media>
          <img
            width={64}
            height={64}
            className="rounded-circle account-img"
            src=""
            alt="Profile Image"
          />
          <Media.Body>
            <h2 className="account-heading">username</h2>
            <p className="text-secondary">email</p>
          </Media.Body>

        </Media>
      </div>
    </div>
  )
}
