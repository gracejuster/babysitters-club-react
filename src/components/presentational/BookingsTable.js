import React from 'react';
import { Panel, Table } from 'react-bootstrap'
// import {connect} from 'react-redux';
// import confirmBookings from '../..actions/confirmBookings'

const BookingsTable = ({title, bookings, type, handleClick}) => {
  let bookingsList

  if (type==="Babysitter"){
     bookingsList = bookings.map((booking) => {
      return (
        <tr key={booking.id}>
          <td>{booking.name}</td>
          <td>{booking.date}</td>
          <td>{booking.time}</td>
          <td>{booking.duration}</td>
          <td><button
                className={"btn btn-primary"}
                onClick={ ()=>{handleClick(booking.id)} }
              >Confirm Request</button></td>
        </tr>
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

  let table

  if (bookingsList.length === 0) {
    table = <Panel><header>No current bookings</header></Panel>
  } else {
    table = (<Table responsive striped bordered condensed className="BookingsTable">
      <thead>
        <tr>
          <th>Who</th>
          <th>Date</th>
          <th>Time</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {bookingsList}
      </tbody>
    </Table>)
  }

  return(
    <div>{ table }</div>

  )
}

// BookingsTable = connect()(BookingsTable)

export default BookingsTable
