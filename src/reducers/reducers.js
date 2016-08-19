import { combineReducers } from 'redux'
import users from './users'
import parents from './parents'
import search from './search'
import babysitters from './babysitters'
import currentUser from './currentuser'
import booking from './booking'
import review from './review'

export default const reducer = combineReducers({
  currentUser: currentUser,
  viewableUser: viewableUser,
  form: formReducer,
  search: search,
  review: review
})
