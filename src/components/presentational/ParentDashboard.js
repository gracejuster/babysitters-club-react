import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap'
import SearchBar from '../container/SearchBar'
import Bookings from './Bookings'
import Requests from '../container/RequestsContainer'
import {connect} from 'react-redux'

const ParentDashboard = () => {
  return (
    <Grid className='Dashboard'>
      <SearchBar />
      <Row><header>BOOKINGS</header></Row>
      <Bookings />
      <Row><header>BABYSITTERS</header></Row>
    </Grid>
  )
}

export default ParentDashboard
