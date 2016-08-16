import React, { Component } from 'react';
import BookingsTable from './BookingsTable'
import Network from './Network'
import Requests from './Requests'

const BabysitterDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <BookingsTable title="Bookings"/>
        <BookingsTable title="Pending Bookings"/>
        <Requests />
        <Network />
      </div>
      );
    }
  }

export default BabysitterDashboard
