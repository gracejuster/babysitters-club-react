import React, { Component } from 'react';
// import {Link} from 'react-router'
import './App.css';
// import Routes from './routes'
// import LogInForm from './components/container/LogInForm'
// import NavBar from './components/presentational/NavBar'
// import PublicBabysitterProfile from './components/presentational/PublicBabysitterProfile'
// import PrivateBabysitterProfile from './components/presentational/PrivateBabysitterProfile'
// import EditBabysitterProfileForm from './components/container/EditBabysitterProfileForm'
// import BabysitterDashboard from './components/presentational/BabysitterDashboard'
// import ParentDashboard from './components/presentational/ParentDashboard'
// import PublicParentProfile from './components/presentational/PublicParentProfile'
// import PrivateParentProfile from './components/presentational/PrivateParentProfile'
// import EditParentProfileForm from './components/container/EditParentProfileForm'

class App extends Component {
  render() {
    const {main, navbar, footer} = this.props
    return (
      <div className="App">
        <div className="top">
          {navbar}
        </div>
        <div className="middle">
          {main}
        </div>
        <div className="bottom">
          {footer}
        </div>
      {/* <h1>Login</h1>
        <LogInForm />
      <h1>NavBar</h1>
        <NavBar params={{username: "current user"}}/>
      <h1>ParentDashboard</h1>
        <ParentDashboard />
      <h1>Public Parent Profile </h1>
        <PublicParentProfile/>
      <h1>Private Parent Profile </h1>
        <PrivateParentProfile specific_needs="" extra_requests=""/>
      <h1>Edit Parent Profile </h1>
        <EditParentProfileForm />
        <br/>
        <br/>
        <br/>
      <h1>BabysitterDashboard</h1>
        <BabysitterDashboard />
      <h1>Public Babysitter Profile </h1>
        <PublicBabysitterProfile/>
      <h1>Private Babysitter Profile </h1>
        <PrivateBabysitterProfile />
      <h1>Edit Babysitter Profile </h1>
        <EditBabysitterProfileForm /> */}
      </div>
    );
  }
}

export default App;
// App
//   Login Form
//     Create Account
