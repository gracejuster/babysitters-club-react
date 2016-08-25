import React, { Component } from 'react';
import SearchBar from '../container/SearchBar'
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

let ParentDashboard = class extends Component{
  render() {
    return(
      <div className='Dashboard'>
        <h3>WELCOME!</h3>
        <SearchBar />
        <Bookings />
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
