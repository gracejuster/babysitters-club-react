import React from 'react';
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
          </tr>
          <button onClick={ ()=>{handleClick(booking.id)} }>Confirm Request</button>
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
      <table className="BookingsTable">
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
      </table>
    </div>
  )
}

// BookingsTable = connect()(BookingsTable)

export default BookingsTable
