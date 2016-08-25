import React, { Component } from 'react';


let ParentInfoOnEditPage = ({currentUser}) => {
    return(
      <div className="ProfileCard">
      <h6>Profile</h6>
      <img alt="Parent"/>
      <br/>
      <p>KID COUNT: {currentUser.account.parent.kid_count}</p>
      <p>ADDRESS: {currentUser.account.parent.address}</p>
      <p>SPECIFIC NEEDS: {currentUser.account.parent.specific_needs}</p>
      <p>EXTRA REQUESTS: {currentUser.account.parent.extra_requests}</p>
      </div>
    )
}

export default ParentInfoOnEditPage
