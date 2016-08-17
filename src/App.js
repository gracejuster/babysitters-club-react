import React, { Component } from 'react';
import {Link} from 'react-router'
import './App.css';
import Routes from './routes'
import LogInForm from './components/container/LogInForm'
import NavBar from './components/presentational/NavBar'
import PublicBabysitterProfile from './components/presentational/PublicBabysitterProfile'
import PrivateBabysitterProfile from './components/presentational/PrivateBabysitterProfile'
import EditBabysitterProfileForm from './components/container/EditBabysitterProfileForm'
import BabysitterDashboard from './components/presentational/BabysitterDashboard'
import ParentDashboard from './components/presentational/ParentDashboard'
import PublicParentProfile from './components/presentational/PublicParentProfile'
import PrivateParentProfile from './components/presentational/PrivateParentProfile'
import EditParentProfileForm from './components/container/EditParentProfileForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogInForm />
      <header>NAV BAR</header>
        <NavBar params={{username: "current user"}}/>
      <header>PARENT DASHBOARD</header>
        <ParentDashboard />
      <header>PUBLIC PARENT PROFILE</header>
        <PublicParentProfile/>
      <header>PRIVATE PARENT PROFILE</header>
        <PrivateParentProfile specific_needs="" extra_requests=""/>
      <header>EDIT PARENT PROFILE FORM</header>
        <EditParentProfileForm />
        <br/>
        <br/>
        <br/>
      <header>BABYSITTER DASHBOARD</header>
        <BabysitterDashboard />
      <header>PUBLIC BABYSITTER PROFILE</header>
        <PublicBabysitterProfile/>
      <header>PRIVATE BABYSITTER PROFILE</header>
        <PrivateBabysitterProfile />
      <header>EDIT BABYSITTER PROFILE FORM</header>
        <EditBabysitterProfileForm />
      {this.props.children}
      </div>
    );
  }
}

export default App;
// App
//   Login Form
//     Create Account
