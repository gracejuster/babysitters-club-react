import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import Bookings from './Bookings'
import RequestsContainer from '../container/RequestsContainer'
import {connect} from 'react-redux'

const BabysitterDashboard = () => {
  return (
    <Grid className='Dashboard'>
      <Row><h3>BOOKINGS</h3></Row>
      <Bookings />
      <Row><h3>REQUESTS </h3></Row>
      <RequestsContainer />
      <Row><h3>PARENTS</h3></Row>
    </Grid>
  )
}

export default BabysitterDashboard
