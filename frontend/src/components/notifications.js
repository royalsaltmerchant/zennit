import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import '../main.css'
import Button from 'react-bootstrap/Button'

export default function Notifications(props) {
  const [button, setButton] = useState(false)
  const [notificationsViewable, setNotificationsViewable] = useState(5)

  function handleNotificationsButton() {
    setButton(!button)
  }

  function renderNotifications(user) {
    const userPosts = user.posts.map(post => {
      return post
    })
    const newComments = userPosts.map(post => {
      return post.comments.filter(comment => {
        if(comment.user_id !== user.id) {
          return true
        }
      })
    }).flat()
    const notifications = newComments.map(comment => (
      <div key={comment.id}>
        <Link to={`/post/${comment['post_id']}#comment-length`}> New Comment from, "{comment['user.username']}", on, "{comment['post.title']}"</Link>
        <hr />
      </div>
    ))
    return notifications.slice(0, notificationsViewable)
  }

  function renderNotificationsContainer() {
    const {user} = props

    if(button && user) {
      return(
        <div className="notifications-box scrolling" onScroll={(event) => renderMoreNotifications(event)}>
          {renderNotifications(user)}
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
