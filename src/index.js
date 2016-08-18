import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import users from './reducers/users'
import parents from './reducers/parents'
import babysitters from './reducers/babysitters'
import currentUser from './reducers/currentuser'
import booking from './reducers/booking'
import review from './reducers/review'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk';

const reducer = combineReducers({
  users: users, //* login form
  parents: parents,
  babysitters: babysitters,
  currentUser: currentUser,
  booking: booking,
  review: review,
  form: formReducer
})

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
