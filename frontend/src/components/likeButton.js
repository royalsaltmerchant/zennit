import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Proptypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLikes, fetchDislikes } from '../actions/likesActions'

function LikeButton(props) {
  const [like, setLike] = useState('none')

  useEffect(() => {
    const {likes, dislikes, fetchLikes, fetchDislikes} = props
    fetchLikes()
    fetchDislikes()
  }, [])

  function renderLikesAmount() {
    const {likes, dislikes, fetchLikes, fetchDislikes, post} = props
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

    if(like === 'none' || like === 'dislike') {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/add_like',
          data: {
            post_id: post
          }
        })
        if(res.status === 201) {
          setLike('like')
          fetchLikes()
          fetchDislikes()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(like === 'like') {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/remove_like'
        })
        if(res.status === 200) {
          setLike('none')
          fetchLikes()
          fetchDislikes()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(like === 'dislike') {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/remove_dislike'
        })
        if(res.status === 200) {
          setLike('none')
          fetchLikes()
          fetchDislikes()
        }
      } catch(error) {
        console.log(error)
      }
    }
  }

  async function handleDislike() {
    const {post, fetchLikes, fetchDislikes} = props

    if(like === 'none' || like === 'like') {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/add_dislike',
          data: {
            post_id: post
          }
        })
        if(res.status === 201) {
          setLike('dislike')
          fetchLikes()
          fetchDislikes()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(like === 'dislike') {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/remove_dislike'
        })
        if(res.status === 200) {
          setLike('none')
          fetchLikes()
          fetchDislikes()
        }
      } catch(error) {
        console.log(error)
      }
    }
    if(like === 'like') {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/remove_like'
        })
        if(res.status === 200) {
          setLike('none')
          fetchLikes()
          fetchDislikes()
        }
      } catch(error) {
        console.log(error)
      }
    }
  }

  function renderLikeButtons() {
    if(like === 'like') {
      return(
        <div className="like-buttons">
          <div style={{color: 'purple'}} onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div onClick={() => handleDislike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    } else if(like === 'dislike') {
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
  dislikes: Proptypes.array.isRequired
}

const mapStateToProps = state => ({
  likes: state.likes.likes,
  dislikes: state.likes.dislikes
})

export default connect(mapStateToProps, { fetchLikes, fetchDislikes })(LikeButton)
