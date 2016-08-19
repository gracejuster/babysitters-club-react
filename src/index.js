// CSS
import './index.css';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Redux & Redux-Form
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

// Middleware
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk';

// React Router
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

// Reducers
import reducer from './reducers/reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
