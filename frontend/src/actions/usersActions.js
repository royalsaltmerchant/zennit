import { FETCH_USER } from './types'
import axios from 'axios'

export const fetchUser = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/get_user',
    headers: {
      "x-access-token": localStorage.getItem("token")
    }
  })
  .then(res => {
    console.log(res)
    dispatch({
      type: FETCH_USER,
      payload: res.data
    })
  })
}