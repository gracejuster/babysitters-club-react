import { combineReducers } from 'redux'
import currentUser from './currentuser'
import viewableUser from './viewableUser'
import search from './search'
import parent from './parent'
import babysitter from './babysitter'
import booking from './booking'
import request from './request'
import review from './review'
import { reducer as formReducer } from 'redux-form';

const Reducer = combineReducers({
  currentUser: currentUser,
  viewableUser: viewableUser,
  search: search,
  parent: parent,
  babysitter: babysitter,
  review: review,
  booking: booking,
  request: request,
  form: formReducer
})

export default Reducer
