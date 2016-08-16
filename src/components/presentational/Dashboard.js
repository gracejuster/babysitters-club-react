import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import BookingsTable from './BookingsTable'
import Network from './Network'
import Requests from './Requests'

const Dashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <SearchBar/>
        <BookingsTable title="Confirmed Bookings"/>
        <BookingsTable title="Pending Bookings"/>
        <Requests />
        <Network />
      </div>
      );
    }
  }

export default Dashboard
