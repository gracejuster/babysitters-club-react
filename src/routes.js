import React from 'react'
import { Route } from 'react-router'
import App from './App'
import CreateAccount from './components/presentational/CreateAccountForm'
import LogInForm from './components/presentational/LogInForm'
import LogOut from './components/container/LogOut'
import Profile from './components/presentational/Profile'

export default (
  <Route path="/" component={App} >
    <Route path="logout" component={LogOut}/>
    <Route path="login" component={LogInForm}/>
    <Route path="newuser" component={CreateAccount}/>
  </Route>


  );
