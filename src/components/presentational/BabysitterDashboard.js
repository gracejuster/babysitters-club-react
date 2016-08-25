import React, { Component } from 'react';
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

const BabysitterDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <h3>BOOKINGS</h3>
        <Bookings />
        <h3>REQUESTS </h3>
        <Requests />
        <h3>NETWORK </h3>
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
