import React from 'react';
import { Route, IndexRedirect } from 'react-router'
import App from './App'
import NavBar from './components/presentational/NavBar'
import NetworkContainer from './components/container/NetworkContainer'
import PublicNetworkContainer from './components/container/PublicNetworkContainer'
import SearchResultsContainer from './components/container/SearchResultsContainer'
import CreateAccountForm from './components/container/CreateAccountForm'
import LogInForm from './components/container/LogInForm'
import BabysitterDashboard from './components/presentational/BabysitterDashboard'
import ParentDashboard from './components/presentational/ParentDashboard'
import EditParentProfileForm from './components/container/EditParentProfileForm'
import EditBabysitterProfileForm from './components/container/EditBabysitterProfileForm'
import CreateBookingForm from './components/container/CreateBookingForm'
import PublicBabysitterProfile from './components/presentational/PublicBabysitterProfile'
import PublicParentProfile from './components/presentational/PublicParentProfile'
// import PrivateBabysitterProfile from './components/presentational/PrivateBabysitterProfile'

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
    <Route path="/user/babysitter/:username" component={{main: PublicBabysitterProfile, navbar: NavBar, footer: PublicNetworkContainer}} />
    <Route path="/user/parent/:username" component={{main: PublicParentProfile, navbar: NavBar, footer: PublicNetworkContainer}} />
    <Route path="babysitter/:username" component={{main: BabysitterDashboard, navbar: NavBar, footer: NetworkContainer}}/>
    <Route path="parent/:username" component={{main: ParentDashboard, navbar: NavBar, footer: NetworkContainer}}/>
    {/* <Route path="privatebabysitter" component={{main: PrivateBabysitterProfile}} /> */}
    {/* becomes a prop in profile - this.props.params --> :username */}
  </Route>
)
;
