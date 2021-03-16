import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import axios from 'axios'

import '../main.css'
import Button from 'react-bootstrap/Button'

export default function Notifications(props) {
  const [button, setButton] = useState(false)
  const [notificationsViewable, setNotificationsViewable] = useState(5)

  async function handleNotificationRead(event, notification) {
    const {fetchNotifications} = props

    event.preventDefault()
    try {
      const res = await axios({
        method: 'post',
        url: '/api/update_notification',
        data: {
          notification_id: notification,
          has_been_read: true
        }
      })
      if (res.status === 200) {
        fetchNotifications()
        console.log('success update notification')
      }
    } catch(error) {
      console.log(error)
    }
  }

  function handleNotificationsButton() {
    setButton(!button)
  }

  function renderNotifications(user, notifications) {
    const notificationsByUser = notifications.filter((notification) => {
      if(notification['post.user_id'] === user.id && notification.has_been_read === false) {
        return true
      }
    })
    console.log(notificationsByUser)
    const newNotifications = notificationsByUser.map(notification => (
      <div key={notification.id}>
        <Link to={`/post/${notification['post_id']}#comment-length`} onClick={(event) => handleNotificationRead(event, notification.id)}> New Comment from, "{notification['user.username']}", on, "{notification['post.title']}"</Link>
        <hr />
      </div>
    ))
    return newNotifications.slice(0, notificationsViewable)
  }

  function renderNotificationsContainer() {
    const {user, notifications} = props

    if(button && user) {
      return(
        <div className="notifications-box scrolling" onScroll={(event) => renderMoreNotifications(event)}>
          {renderNotifications(user, notifications)}
        </div>
      )
    }
  }

  function renderMoreNotifications(event) {
    const target = event.target

    if(target.scrollHeight - target.scrollTop === target.clientHeight) {
      setNotificationsViewable(notificationsViewable + 5)
      console.log(notificationsViewable)
    }
  }

  return (
    <div>
      {renderNotificationsContainer()}
      <div className="position-fixed notifications-btn">
        <Button variant="info" onClick={() => handleNotificationsButton()}>
        Notifications
        </Button>
      </div>
    </div>
  )
}
