// Import CSS
import './index.css';

// Import Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

// Import Middleware
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk';

// Import React Router
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

// Import Reducers
import reducer from './reducers/reducers'

// Create Store
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducer)

// Render ReactDOM to Root
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
  document.getElementById('root')
);
