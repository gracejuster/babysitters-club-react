import React, { Component } from 'react';
import { Route } from 'react-router'
import App from './App'
import CreateAccountForm from './components/container/CreateAccountForm'
import LogInForm from './components/container/LogInForm'
import LogOut from './components/presentational/LogOut'
import Dashboard from './components/presentational/Dashboard'
import EditParentProfileForm from './components/container/EditParentProfileForm'

export default (
  <Route path="/" component={App} >
    {/* <Route path="logout" component={LogOut}/> */}
    {/* put this back soon! */}
    <Route path="login" component={LogInForm}/>
    <Route path="newuser" component={CreateAccountForm}/>
    <Route path="user/:username" component={Dashboard}/>
    <Route path="user/edit/:username" component={EditParentProfileForm}/>
    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
