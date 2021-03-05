import { FETCH_POSTS, NEW_POST } from './types'
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
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(posts => dispatch({
  //     type: FETCH_POSTS,
  //     payload: posts
  //   }))
}

export const createPosts = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }))
}