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
// import CreateBookingForm from './components/container/CreateBookingForm'

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

      </div>
    );
  }
}

export default App;
// App
//   Login Form
//     Create Account
