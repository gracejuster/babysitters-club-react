import React from 'react';
import { Grid, Row } from 'react-bootstrap'
import SearchBar from '../container/SearchBar'
import Bookings from '../container/Bookings'

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
