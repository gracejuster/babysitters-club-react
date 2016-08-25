import React, { Component } from 'react';
import { browserHistory } from 'react-router'


let EditParentCard = class extends Component  {
  render() {
    debugger
    return(
      <div className="ProfileCard">
      <h6>Profile</h6>
      <img alt="Parent"/>
      <br/>
      <p>KID COUNT: {currentUser.kid_count}</p>
      <p>ADDRESS: {currentUser.address}</p>
      <p>SPECIFIC NEEDS: {currentUser.specific_needs}</p>
      <p>EXTRA REQUESTS: {currentUser.extra_requests}</p>
      </div>
    )
  }
}

export default EditParentCard
