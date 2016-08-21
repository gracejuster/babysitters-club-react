import { combineReducers } from 'redux'
import currentUser from './currentuser'
import viewableUser from './viewableUser'
import search from './search'
import { reducer as formReducer } from 'redux-form';

const Reducer = combineReducers({
  currentUser: currentUser,
  viewableUser: viewableUser,
  search: search,
  form: formReducer
})

export default Reducer
