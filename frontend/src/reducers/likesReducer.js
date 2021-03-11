import { FETCH_LIKES, FETCH_DISLIKES } from '../actions/types.js'

const initialState = {
  likes: [],
  dislikes: []
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case FETCH_LIKES:
      return {
        ...state,
        likes: action.payload
      }
    case FETCH_DISLIKES:
      return {
        ...state,
        dislikes: action.payload
      }
    default:
      return state
  }
}