import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import users from './reducers/users'
import parents from './reducers/parents'
import babysitters from './reducers/babysitters'



const reducer = combineReducers({
  users: users,
  parents: parents,
  babysitters: babysitters
})

const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
