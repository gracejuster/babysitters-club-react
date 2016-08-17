import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import BookingsTable from './BookingsTable'
import Network from './Network'

const ParentDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <SearchBar/>
        <BookingsTable title="Confirmed Bookings"/>
        <BookingsTable title="Pending Bookings"/>
        <Network />
      </div>
      );
    }
  }

export default ParentDashboard