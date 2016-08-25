import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

let ParentDashboard = class extends Component{
  debugger
  render() {
    return(
      <div className='Dashboard'>
        <SearchBar />
        <h3>BOOKINGS</h3>
        <Bookings />
        <h3>BABYSITTERS</h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ParentDashboard)
