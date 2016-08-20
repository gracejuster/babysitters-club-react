import React from 'react';
// import {Link} from 'react-router'

const BookingsTable = ({title, bookings, type}) => {
  let bookingsList
  if (type=="Babysitter"){
     bookingsList = bookings.map((booking) => {
      return (
        <div>
          <tr><td>{booking.name}</td><td>{booking.time}</td><td>{booking.duration}</td></tr>
          <button>Confirm Request</button>
        </div>
      )
    })
  }
  else {
     bookingsList = bookings.map((booking) => {
      return <tr><td>{booking.name}</td><td>{booking.time}</td><td>{booking.duration}</td></tr>
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

export default BookingsTable
