import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import BookingsTable from './BookingsTable'
import Network from './Network'
import auth from '../container/AuthenticationResource'
import {connect} from 'react-redux'

let ParentDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <SearchBar/>
        <BookingsTable title="Confirmed Bookings"/>
        <BookingsTable title="Pending Bookings"/>
      </div>
      );
    }
  }

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ParentDashboard)