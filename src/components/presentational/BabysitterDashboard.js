import React, { Component } from 'react';
import Bookings from './Bookings'
import Requests from './Requests'
import auth from '../container/AuthenticationResource'
import {connect} from 'react-redux'

const BabysitterDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <Bookings />
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
