import React, { Component } from 'react';
import { Route } from 'react-router'
import App from './App'
import CreateAccountForm from './components/container/CreateAccountForm'
import LogInForm from './components/container/LogInForm'
import LogOut from './components/presentational/LogOut'
import BabysitterDashboard from './components/presentational/BabysitterDashboard'
import ParentDashboard from './components/presentational/ParentDashboard'
import EditParentProfileForm from './components/container/EditParentProfileForm'
import EditBabysitterProfileForm from './components/container/EditBabysitterProfileForm'

export default (
  <Route path="/" component={App} >
    {/* <Route path="logout" component={LogOut}/> */}
    {/* put this back soon! */}
    <Route path="login" component={LogInForm}/>
    <Route path="newuser" component={CreateAccountForm}/>
    <Route path="user/babysitter/:username" component={BabysitterDashboard}/>
    <Route path="user/parent/:username" component={ParentDashboard}/>
    <Route path="user/edit/parent/:username" component={EditParentProfileForm}/>
    <Route path="user/edit/babysitter/:username" component={EditBabysitterProfileForm}/>
    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
