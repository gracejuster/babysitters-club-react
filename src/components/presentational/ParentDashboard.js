import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import BookingsTable from './BookingsTable'
import Network from './Network'
import Requests from './Requests'

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
