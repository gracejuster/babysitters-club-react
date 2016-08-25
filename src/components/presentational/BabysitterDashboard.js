import React, { Component } from 'react';
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

const BabysitterDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <h3>WELCOME!</h3>
        Bookings
        <Bookings />
        Network Requests
        <Requests />
      </div>
      )
    }
  }

  function mapStateToProps(state){
    return{
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps)(BabysitterDashboard)
