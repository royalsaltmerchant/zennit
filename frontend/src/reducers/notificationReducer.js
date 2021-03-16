import { FETCH_NOTIFICATIONS } from '../actions/types.js'

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}