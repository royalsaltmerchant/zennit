import { FETCH_LIKES, FETCH_DISLIKES } from './types'
import axios from 'axios'

export const fetchLikes = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/likes',
  })
  .then(res => {
    dispatch({
      type: FETCH_LIKES,
      payload: res.data
    })
  })
}

export const fetchDislikes = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/dislikes',
  })
  .then(res => {
    dispatch({
      type: FETCH_DISLIKES,
      payload: res.data
    })
  })
}