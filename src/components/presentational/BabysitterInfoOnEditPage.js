import React, { Component } from 'react';


let BabysitterInfoOnEditPage = ({currentUser}) => {
  debugger
    return(
      <div className="ProfileCard">
      <h6>Profile</h6>
      <img alt="Babysitter"/>
      <br/>
      <p>Age: {currentUser.account.babysitter.age}</p>
      <p>Address: {currentUser.account.babysitter.location}</p>
      <p>Bio: {currentUser.account.babysitter.bio}</p>
      <p>Skills: {currentUser.account.babysitter.skills}</p>
      </div>
    )
}

export default BabysitterInfoOnEditPage
