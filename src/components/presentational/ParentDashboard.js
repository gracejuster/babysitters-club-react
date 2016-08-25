import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap'
import SearchBar from '../container/SearchBar'
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

let ParentDashboard = class extends Component{
  render() {
    return(
      <Grid className='Dashboard'>
        <Row><SearchBar /></Row>
        <Row><header>BOOKINGS</header></Row>
        <Row><Bookings /></Row>
        <Row><header>BABYSITTERS</header></Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ParentDashboard)
