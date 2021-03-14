import React, { useState } from 'react'

import '../main.css'
import Button from 'react-bootstrap/Button'

export default function Notifications() {
  const [button, setButton] = useState(false)

  function handleNotificationsButton() {
    setButton(!button)
  }

  function renderNotificationsContainer() {
    if(button) {
      return(
        <div className="notifications-box">
          <p>New Notification</p>
          <hr />
          <p>New Notification</p>
          <hr />
          <p>New Notification</p>
          <hr />
          <p>New Notification</p>
        </div>
      )
    }
  }

  return (
    <div>
      {renderNotificationsContainer()}
      <div className="position-fixed notifications-btn">
        <Button variant="info" onClick={() => handleNotificationsButton()}>
        test
        </Button>
      </div>
    </div>
  )
}
