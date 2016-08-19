import { combineReducers } from 'redux'
import users from './reducers/users'
import parents from './reducers/parents'
import search from './reducers/search'
import babysitters from './reducers/babysitters'
import currentUser from './reducers/currentuser'
import booking from './reducers/booking'
import review from './reducers/review'

export default const reducer = combineReducers({
  currentUser: currentUser,
  viewableUser: viewableUser,
  form: formReducer,
  search: search,
  review: review
})
