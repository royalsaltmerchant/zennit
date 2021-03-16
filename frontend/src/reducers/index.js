import { combineReducers }from 'redux'
import commentReducer from './commentReducer'
import likesReducer from './likesReducer'
import notificationReducer from './notificationReducer'
import postReducer from './postReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  comments: commentReducer,
  notifications: notificationReducer,
  likes: likesReducer,
  dislikes: likesReducer
})