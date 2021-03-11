import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default function LikeButton(props) {
  const [like, setLike] = useState('none')

  async function handleLike() {
    const {post} = props

    if(like === 'none') {
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
          console.log(res)
        }
      } catch(error) {
        console.log(error)
      }
    }
  }

  function handleUnLike() {

  }

  function renderLikeButtons() {
    if(like === 'like') {
      return(
        <div className="like-buttons">
          <div style={{color: 'purple'}} onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div onClick={() => handleUnLike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    } else if(like === 'unlike') {
      return(
        <div className="like-buttons">
          <div onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div style={{color: 'purple'}} onClick={() => handleUnLike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    } else {
      return(
        <div className="like-buttons">
          <div onClick={() => handleLike()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" /></div>
          <div onClick={() => handleUnLike()}><FontAwesomeIcon icon={faArrowAltCircleDown} size="2x" /></div>
        </div>
      )
    }
  }

  return (
    <div>
      {renderLikeButtons()}
    </div>
  )
}
