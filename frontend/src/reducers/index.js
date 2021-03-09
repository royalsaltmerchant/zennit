import { combineReducers }from 'redux'
import commentReducer from './commentReducer'
import postReducer from './postReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  comments: commentReducer
})