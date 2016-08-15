import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import users from './reducers/users'
import parents from './reducers/parents'
import babysitters from './reducers/babysitters'
import Routes from './routes'
import { Router, browserHistory } from 'react-router'


const reducer = combineReducers({
  users: users,
  parents: parents,
  babysitters: babysitters
})

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
