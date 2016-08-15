import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import users from './reducers/users'
import parents from './reducers/parents'
import babysitters from './reducers/babysitters'
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

const reducer = combineReducers({
  users: users, //* login form
  parents: parents,
  babysitters: babysitters,
  form: formReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
