import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap'

const NetworkRequestTable = ({currentUser, networkRequestArray, type, confirmNetworkRequest}) => {
  let networkRequests

  if (type==="Babysitter"){
     networkRequests = networkRequestArray.map((networkRequest) => {
      return (
        <Col xs={6} md={4}>
        <Panel header={networkRequest.parent_name} >
          <button className={"btn btn-primary"} onClick={ ()=>{confirmNetworkRequest(networkRequest.id)}}>Confirm Network Request</button>
        </Panel>
        </Col>
      )
    })
  }
  else {
     networkRequests = networkRequestArray.map((networkRequest) => {
      return (
        <Col xs={6} md={4}>
          <Panel header={networkRequest.baby_name} />
        </Col>
      )
    })
  }
  return(
    <div className="NetworkRequestTable">
      <header>Pending Network Requests</header>
      <Grid className="NetworkRequestTable">
        <Row>{networkRequests}</Row>
      </Grid>
    </div>
  )
}

export default NetworkRequestTable
