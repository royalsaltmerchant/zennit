import { FETCH_REPLIES } from '../actions/types.js'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case FETCH_REPLIES:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}