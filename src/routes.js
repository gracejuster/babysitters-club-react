// Modules
import React from 'react';
import { Route, IndexRedirect } from 'react-router'

// Primary Component
import App from './App'

// Header
import NavBar from './components/presentational/NavBar'

// Footer
import PrivateNetworkContainer from './components/container/PrivateNetworkContainer'
import PublicNetworkContainer from './components/container/PublicNetworkContainer'

// Main
import SearchResultsContainer from './components/container/SearchResultsContainer'
import CreateAccountForm from './components/container/CreateAccountForm'
import LogInForm from './components/container/LogInForm'
import BabysitterDashboard from './components/presentational/BabysitterDashboard'
import ParentDashboard from './components/presentational/ParentDashboard'
import EditParentProfileForm from './components/container/EditParentProfileForm'
import EditBabysitterProfileForm from './components/container/EditBabysitterProfileForm'
import CreateBookingForm from './components/container/CreateBookingForm'
import PrivateBabysitterProfile from './components/presentational/PrivateBabysitterProfile'
import PublicParentProfile from './components/presentational/PublicParentProfile'

export default (
  <Route path="/" component={App} >
    {/* <Route path="logout" component={LogOut}/> */}
    {/* put this back soon! */}
    <IndexRedirect to="/login" />
    <Route path="login" component={{main: LogInForm}}/>
    <Route path="newuser" component={{main: CreateAccountForm}}/>
    <Route path="bookings/:username" component={{main: CreateBookingForm, navbar: NavBar}}/>
    <Route path="edit/parent/:username" component={{main: EditParentProfileForm, navbar: NavBar}}/>
    <Route path="edit/babysitter/:username" component={{main: EditBabysitterProfileForm, navbar: NavBar}}/>
    <Route path="parents" component={{main: SearchResultsContainer, navbar: NavBar}} />
    <Route path="/user/babysitter/:username" component={{main: PrivateBabysitterProfile, navbar: NavBar}} />
    <Route path="/user/parent/:username" component={{main: PublicParentProfile, navbar: NavBar, footer: PublicNetworkContainer}} />
    <Route path="babysitter/:username" component={{main: BabysitterDashboard, navbar: NavBar, footer: PrivateNetworkContainer}}/>
    <Route path="parent/:username" component={{main: ParentDashboard, navbar: NavBar, footer: PrivateNetworkContainer}}/>
    {/* <Route path="privatebabysitter" component={{main: PrivateBabysitterProfile}} /> */}
    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
