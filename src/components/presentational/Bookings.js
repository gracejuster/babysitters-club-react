import React, { Component } from 'react';
import {Link} from 'react-router'
import BookingsTable from './BookingsTable'

const Bookings = ({}) => {
  return(
    <div className="Bookings">
      <BookingsTable title='Pending'/>
      <BookingsTable title='Confirmed'/>
    </div>

  )
}

export default Bookings
