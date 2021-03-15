import React, { useState } from 'react'

import '../main.css'
import Button from 'react-bootstrap/Button'

export default function Notifications(props) {
  const [button, setButton] = useState(false)

  function handleNotificationsButton() {
    setButton(!button)
  }

  function renderNotificationsContainer() {
    const {user} = props

    if(button && user) {
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
      console.log(newComments)
      const notifications = newComments.map(comment => (
        <div className="notifications-box" key={comment.id}>
           <small>New Comment from, "{comment['user.username']}", on, "{comment['post.title']}"</small>
           <hr />
        </div>
      ))
      console.log(notifications)
      return notifications
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
