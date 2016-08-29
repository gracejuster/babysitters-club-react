import React, {Component} from 'react'
import { Tabs, Tab, Panel, Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import BookingsTable from './BookingsTable'
import retrieveUser from '../../actions/retrieveUser'
import confirmBookings from '../../actions/confirmBookings'


let Bookings = class extends Component {
  sendConfirmation(bookingId){
    this.props.confirmBookings(bookingId, this.props.currentUser).then(() => {
      this.props.retrieveUser(this.props.currentUser)
    })
  }

  render(){
    return (
      <Row>
      <Col xs={0} md={2} />
      <Col xs={12} md={8} center>
        <Panel>
          <Tabs className="Bookings">
            <Tab eventKey={1} title="Confirmed">
              <BookingsTable
                title='Confirmed'
                bookings={this.props.confirmedBookings}
                type="confirmed"
                handleClick={this.sendConfirmation.bind(this)}
              />
            </Tab>
            <Tab eventKey={2} title="Pending">
              <BookingsTable
                title='Pending'
                bookings={this.props.pendingBookings}
                type={this.props.type}
                handleClick={this.sendConfirmation.bind(this)}
              />
            </Tab>
          </Tabs>
        </Panel>
      </Col>
      <Col xs={0} md={2} />
      </Row>
    )

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

Bookings = connect(mapStateToProps, {confirmBookings, retrieveUser})(Bookings)

export default Bookings
