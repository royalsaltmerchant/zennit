import { FETCH_REPLIES } from './types'
import axios from 'axios'

export const fetchReplies = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/replies',
  })
  .then(res => {
    console.log(res)
    dispatch({
      type: FETCH_REPLIES,
      payload: res.data
    })
  })
}