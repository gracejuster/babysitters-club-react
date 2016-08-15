import React, { Component } from 'react';
import { Route } from 'react-router'
import App from './App'
import CreateAccount from './components/presentational/CreateAccountForm'
import LogInForm from './components/presentational/LogInForm'
import LogOut from './components/container/LogOut'
import Dashboard from './components/presentational/Dashboard'

export default (
  <Route path="/" component={App} >
    {/* <Route path="logout" component={LogOut}/> */}
    {/* put this back soon! */}
    <Route path="login" component={LogInForm}/>
    <Route path="newuser" component={CreateAccount}/>
    <Route path="user/:username" component={Dashboard}/>

    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
