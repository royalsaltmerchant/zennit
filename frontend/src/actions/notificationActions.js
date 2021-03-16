import { FETCH_NOTIFICATIONS } from './types'
import axios from 'axios'

export const fetchNotifications = () => dispatch => {
  axios({
    method: 'get',
    url: '/api/notifications',
  })
  .then(res => {
    dispatch({
      type: FETCH_NOTIFICATIONS,
      payload: res.data
    })
  })
}