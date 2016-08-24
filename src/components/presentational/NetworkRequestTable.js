import React from 'react';
import { Table } from 'react-bootstrap'

const NetworkRequestTable = ({currentUser, networkRequestArray, type, confirmNetworkRequest}) => {
  let networkRequests

  if (type==="Babysitter"){
     networkRequests = networkRequestArray.map((networkRequest) => {
      return (
        <div>
          <tr>
            <td>{networkRequest.parent_name}</td>
          </tr>
          <button onClick={ ()=>{confirmNetworkRequest(networkRequest.id)} }>Confirm Network Request</button>
        </div>
      )
    })
  }
  else {
     networkRequests = networkRequestArray.map((networkRequest) => {
      return (
        <tr>
          <td>{networkRequest.baby_name}</td>
        </tr>
      )
    })
  }
  return(
    <div id="form" className="NetworkRequestTable">
      <h6>Pending Network Requests</h6>
      <Table className="NetworkRequestTable">
        <thead>
          <tr>
            <th>Who:</th>
          </tr>
        </thead>
        <tbody>
          {networkRequests}
        </tbody>
      </Table>
    </div>
  )
}

export default NetworkRequestTable
