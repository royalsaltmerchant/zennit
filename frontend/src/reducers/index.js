import { combineReducers }from 'redux'
import commentReducer from './commentReducer'
import likesReducer from './likesReducer'
import postReducer from './postReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
  comments: commentReducer,
  likes: likesReducer,
  dislikes: likesReducer
})