import { FETCH_COMMENTS } from './types'
import axios from 'axios'

export const fetchComments = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/comments',
  })
  .then(res => {
    dispatch({
      type: FETCH_COMMENTS,
      payload: res.data
    })
  })
}