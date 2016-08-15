import React from 'react'
import { Route } from 'react-router'
import App from './App'
import CreateAccount from './components/presentational/CreateAccountForm'
import LogInForm from './components/presentational/LogInForm'


export default (
  <Route path="/" component={App} >
    <Route path="login" component={LogInForm}/>
    <Route path="newuser" component={CreateAccount}/>
  </Route>


  );
