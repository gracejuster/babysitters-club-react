import React from 'react';
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
import CreateBookingForm from './components/container/CreateBookingForm'
import ParentProfileCard from './components/presentational/ParentProfileCard'

export default (
  <Route path="/" component={App} >
    {/* <Route path="logout" component={LogOut}/> */}
    {/* put this back soon! */}
    <Route path="login" component={{main: LogInForm}}/>
    <Route path="newuser" component={{main: CreateAccountForm}}/>
    <Route path="babysitter/:username" component={{main: BabysitterDashboard, navbar: NavBar, footer: Network}}/>
    <Route path="parent/:username" component={{main: ParentDashboard, navbar: NavBar, footer: Network}}/>
    <Route path="bookings/:username" component={{main: CreateBookingForm, navbar: NavBar}}/>
    <Route path="edit/parent/:username" component={{main: EditParentProfileForm, navbar: NavBar}}/>
    <Route path="edit/babysitter/:username" component={{main: EditBabysitterProfileForm, navbar: NavBar}}/>
    <Route path="parents" component={{main: ParentProfileCard, navbar: NavBar}} />
    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
