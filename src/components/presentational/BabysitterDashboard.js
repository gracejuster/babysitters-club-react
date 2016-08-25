import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

const BabysitterDashboard = class extends Component {
  render() {
    return(
      <Grid className='Dashboard'>
        <Row><h3>BOOKINGS</h3></Row>
        <Bookings />
        <Row><h3>REQUESTS </h3></Row>
        <Requests />
        <Row><h3>PARENTS</h3></Row>
      </Grid>
      )
    }
  }

  function mapStateToProps(state){
    return{
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps)(BabysitterDashboard)
