import React from 'react'
import { connect } from 'react-redux'
import BookingsTable from './BookingsTable'

let Bookings = ({confirmedBookings, pendingBookings, type}) => {
  return(
    <div className="Bookings">
      <BookingsTable title='Confirmed' bookings={confirmedBookings} type="confirmed"/>

      <BookingsTable title='Pending' bookings={pendingBookings} type={type}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    confirmedBookings: state.currentUser.account.confirmed_bookings,
    pendingBookings: state.currentUser.account.requested_bookings,
    type: state.currentUser.type
  }
}

Bookings = connect(mapStateToProps)(Bookings)

export default Bookings
