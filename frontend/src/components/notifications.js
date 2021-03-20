import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import axios from 'axios'

import '../main.css'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Popover from 'react-bootstrap/Popover'

export default function Notifications(props) {
  const [button, setButton] = useState(false)
  const [notificationsViewable, setNotificationsViewable] = useState(5)
  const notificationsByUser = props.notifications.filter((notification) => {
    if(notification['post.user_id'] === props.user.id && notification.has_been_read === false && notification.user_id !== props.user.id) {
      return true
    }
  })

  async function handleNotificationRead(event, notification) {
    const {fetchNotifications} = props

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
      }
    } catch(error) {
      console.log(error)
    }
  }

  function handleNotificationsButton() {
    setButton(!button)
  }

  function renderNotifications() {
    const newNotifications = notificationsByUser.map(notification => (
      <Link style={{textDecoration: 'none', color: 'purple'}} to={`/post/${notification['post_id']}#comment-length`} onClick={(event) => handleNotificationRead(event, notification.id)}>
        <div className="notification px-1 mt-2 mb-2" key={notification.id}>
          New comment from "{notification['user.username']}" on your post "{notification['post.title']}"
        </div>
      </Link>
    ))
    if(newNotifications.length === 0) {
      return <p className="mt-2">No New Notifications!</p>
    } else {
      return newNotifications.slice(0, notificationsViewable)
    }
  }

  function renderNotificationsContainer() {
    const {user} = props

    if(button && user) {
      return(
        <div className="notifications-box scrolling p-0" onScroll={(event) => renderMoreNotifications(event)}>
          {/* {renderLoader()} */}
          {renderNotifications()}
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

  function renderNotificationsCount() {
      if(notificationsByUser.length > 0) {
        return(
          <Popover className="popover-style position-relative" placement="top">
            <Popover.Content>
              {notificationsByUser.length}
            </Popover.Content>
          </Popover>
        )
      }
  }

  // function renderLoader() {
  //   const {fetchNotifications} = props
  //   console.log(notificationsByUser.length)
  //   if(notificationsByUser.length !== ) {
  //     return(
  //       <Spinner animation="border" style={{margin: '30px'}} />
  //     )
  //   }
  // }

  return (
    <div>
      {renderNotificationsContainer()}
      <div className="position-fixed notifications-btn">
        {renderNotificationsCount()}
        <Button variant="info" onClick={() => handleNotificationsButton()}>
          Notifications
        </Button>
      </div>
    </div>
  )
}
