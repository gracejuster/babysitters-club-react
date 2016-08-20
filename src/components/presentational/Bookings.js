import React from 'react'
import { connect } from 'react-redux'
import BookingsTable from './BookingsTable'

let Bookings = ({confirmedBookings, pendingBookings}) => {
  return(
    <div className="Bookings">
      <BookingsTable title='Pending' bookings={confirmedBookings}/>
      <BookingsTable title='Confirmed' bookings={pendingBookings}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    confirmedBookings: state.currentUser.account.confirmed_bookings,
    pendingBookings: state.currentUser.account.requested_bookings
  }
}

Bookings = connect(mapStateToProps)(Bookings)

export default Bookings
