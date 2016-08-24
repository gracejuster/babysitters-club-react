import React from 'react';
import { Table } from 'react-bootstrap'
// import {connect} from 'react-redux';
// import confirmBookings from '../..actions/confirmBookings'

const BookingsTable = ({title, bookings, type, handleClick}) => {
  let bookingsList

  if (type==="Babysitter"){
     bookingsList = bookings.map((booking) => {
      return (
        <div key={booking.id}>
          <tr>
            <td>{booking.name}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>{booking.duration}</td>
            <td><button
                  className={"btn btn-primary"}
                  onClick={ ()=>{handleClick(booking.id)} }
                >Confirm Request</button></td>
          </tr>
        </div>
      )
    })
  }
  else {
     bookingsList = bookings.map((booking) => {
      return (
        <tr key={booking.id}>
          <td>{booking.name}</td>
          <td>{booking.date}</td>
          <td>{booking.time}</td>
          <td>{booking.duration}</td>
        </tr>
      )
    })
  }

  return(
    <div id="form" className="BookingsTable">
      <h6>{title}</h6>
      <Table responsive className="BookingsTable">
        <thead>
          <tr>
            <th>Who:</th>
            <th>When:</th>
            <th>What Time:</th>
            <th>Duration:</th>
          </tr>
        </thead>
        <tbody>
          {bookingsList}
        </tbody>
      </Table>
    </div>
  )
}

// BookingsTable = connect()(BookingsTable)

export default BookingsTable
