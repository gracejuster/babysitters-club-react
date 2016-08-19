import { combineReducers } from 'redux'
import parents from './parent'
import search from './search'
import babysitters from './babysitter'
import currentUser from './currentuser'
import booking from './booking'
import request from './request'
import review from './review'
import { reducer as formReducer } from 'redux-form';

const Reducer = combineReducers({
  currentUser: currentUser,
  viewableUser: viewableUser,
  search: search,
  review: review,
  booking: booking,
  request: request,
  form: formReducer
})

export default Reducer
