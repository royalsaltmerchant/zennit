import { FETCH_POSTS } from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/posts',
  })
  .then(res => {
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    })
  })
}