import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLikes, fetchDislikes } from '../actions/likesActions'
import { fetchUser } from '../actions/usersActions'


function LikeButton(props) {
  const {likes, dislikes, user, post} = props

  const currentUserLike = likes.filter((like) => {
    if(like.user_id === user.id && like.post_id === post) {
      return true
    }
  })
  const currentUserDislike = dislikes.filter((dislike) => {
    if(dislike.user_id === user.id && dislike.post_id === post) {
      return true
    }
  })

  useEffect(() => {
    const {likes, dislikes, fetchLikes, fetchDislikes} = props
    fetchLikes()
    fetchDislikes()
    fetchUser()
  }, [])


  function renderLikesAmount() {
    const {likes, dislikes, post} = props
    const likesById = likes.filter((like) => {
      if(like.post_id == post) {
        return true
      }
    })
    const dislikesById = dislikes.filter((dislike) => {
      if(dislike.post_id == post) {
        return true
      }
    })
    const amount = likesById.length - dislikesById.length


    return amount
  }

  async function handleLike() {
    const {post, fetchLikes, fetchDislikes} = props

    if(Object.keys(currentUserLike).length === 0 || Object.keys(currentUserDislike).length !== 0) {
      try {
        const res = await axios({
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          method: 'post',
          url: '/api/add_like',
          data: {
            post_id: post
          }
        })
        if(res.status === 201) {
          fetchLikes()
          fetchDislikes()
          fetchUser()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(Object.keys(currentUserLike).length !== 0) {
      try {
        const res = await axios({
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          method: 'post',
          url: '/api/remove_like'
        })
        if(res.status === 200) {
          fetchLikes()
          fetchDislikes()
          fetchUser()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(Object.keys(currentUserDislike).length !== 0) {
      try {
        const res = await axios({
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          method: 'post',
          url: '/api/remove_dislike'
        })
        if(res.status === 200) {
          fetchLikes()
          fetchDislikes()
          fetchUser()
        }
      } catch(error) {
        console.log(error)
      }
    }
  }

  async function handleDislike() {
    const {post, fetchLikes, fetchDislikes} = props

    if(Object.keys(currentUserDislike).length === 0 || Object.keys(currentUserLike).length !== 0) {
      try {
        const res = await axios({
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          method: 'post',
          url: '/api/add_dislike',
          data: {
            post_id: post
          }
        })
        if(res.status === 201) {
          fetchLikes()
          fetchDislikes()
          fetchUser()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(Object.keys(currentUserDislike).length !== 0) {
      try {
        const res = await axios({
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          method: 'post',
          url: '/api/remove_dislike'
        })
        if(res.status === 200) {
          fetchLikes()
          fetchDislikes()
          fetchUser()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(Object.keys(currentUserLike).length !== 0) {
      try {
        const res = await axios({
          headers: {
            "x-access-token": localStorage.getItem("token")
          },
          method: 'post',
          url: '/api/remove_like'
        })
        if(res.status === 200) {
          fetchLikes()
          fetchDislikes()
          fetchUser()
        }
      } catch(error) {
        console.log(error)
      }
    }
  }

  function renderLikeButtons() {

    if(Object.keys(currentUserLike).length !== 0) {
      return(
        <div className="like-buttons">
          <div style={{color: 'purple'}} onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div onClick={() => handleDislike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    } else if(Object.keys(currentUserDislike).length !== 0) {
      return(
        <div className="like-buttons">
          <div onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div style={{color: 'purple'}} onClick={() => handleDislike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    } else {
      return(
        <div className="like-buttons">
          <div onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div onClick={() => handleDislike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    }
  }

  return (
    <div>
      <div style={{margin: '17px'}}>
        {renderLikesAmount()}
      </div>
      {renderLikeButtons()}
    </div>
  )
}

LikeButton.propTypes = {
  fetchLikes: Proptypes.func.isRequired,
  likes: Proptypes.array.isRequired,
  fetchDislikes: Proptypes.func.isRequired,
  dislikes: Proptypes.array.isRequired,
  fetchUser: Proptypes.func.isRequired
}

const mapStateToProps = state => ({
  likes: state.likes.likes,
  dislikes: state.likes.dislikes,
  user: state.users.item,
})

export default connect(mapStateToProps, { fetchLikes, fetchDislikes, fetchUser })(LikeButton)
