import React, { Component } from 'react';
import { Route } from 'react-router'
import App from './App'
import NavBar from './components/presentational/NavBar'
import Network from './components/presentational/Network'
import CreateAccountForm from './components/container/CreateAccountForm'
import LogInForm from './components/container/LogInForm'
// import LogOut from './components/presentational/LogOut'
import BabysitterDashboard from './components/presentational/BabysitterDashboard'
import ParentDashboard from './components/presentational/ParentDashboard'
import EditParentProfileForm from './components/container/EditParentProfileForm'
import EditBabysitterProfileForm from './components/container/EditBabysitterProfileForm'

export default (
  <Route path="/" component={App} >
    {/* <Route path="logout" component={LogOut}/> */}
    {/* put this back soon! */}
    <Route path="login" component={{main: LogInForm}}/>
    <Route path="newuser" component={{main: CreateAccountForm}}/>
    <Route path="babysitters/:username" component={{main: BabysitterDashboard, navbar: NavBar, footer: Network}}/>
    <Route path="parent/:username" component={{main: ParentDashboard, navbar: NavBar, footer: Network}}/>
    <Route path="user/edit/parent/:username" component={{main: EditParentProfileForm, navbar: NavBar}}/>
    <Route path="user/edit/babysitter/:username" component={{main: EditBabysitterProfileForm, navbar: NavBar}}/>
    <Route path="parents" component={{navbar: NavBar}} />
    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
