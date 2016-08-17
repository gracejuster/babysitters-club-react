import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import BookingsTable from './BookingsTable'
import auth from '../container/AuthenticationResource'

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

ParentDashboard = auth(ParentDashboard)

export default ParentDashboard;
