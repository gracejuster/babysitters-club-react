import React, {Component} from 'react'
import { connect } from 'react-redux'
import BookingsTable from './BookingsTable'
import confirmBookings from '../../actions/confirmBookings'

let Bookings = class extends Component {

  sendConfirmation(bookingId){
    this.props.handleClick(bookingId, this.props.currentUser)
  }

  render(){
    return(
      <div className="Bookings">
        <BookingsTable title='Confirmed' bookings={this.props.confirmedBookings} type="confirmed" handleClick={this.sendConfirmation.bind(this)}/>
        <BookingsTable title='Pending' bookings={this.props.pendingBookings} type={this.props.type} handleClick={this.sendConfirmation.bind(this)}/>
      </div>
    )

  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    handleClick:(bookingId, currentUser) => {dispatch(confirmBookings(bookingId, currentUser))}
  }
}

const mapStateToProps = (state) => {

  return {
    confirmedBookings: state.currentUser.account.confirmed_bookings,
    pendingBookings: state.currentUser.account.requested_bookings,
    currentUser: state.currentUser,
    type: state.currentUser.type
  }
}


Bookings = connect(mapStateToProps, mapDispatchToProps)(Bookings)

export default Bookings
