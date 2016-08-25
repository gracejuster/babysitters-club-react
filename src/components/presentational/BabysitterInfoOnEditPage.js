import React, { Component } from 'react';


let BabysitterInfoOnEditPage = ({currentUser}) => {
  
    return(
      <div className="ProfileCard">
      <h6>Profile</h6>
      <img alt="Babysitter"/>
      <br/>
      <p>KID COUNT: {currentUser.account.babysitter.age}</p>
      <p>ADDRESS: {currentUser.account.babysitter.location}</p>
      <p>BIO: {currentUser.account.babysitter.bio}</p>
      <p>SKILLS: {currentUser.account.babysitter.skills}</p>
      </div>
    )
}

export default BabysitterInfoOnEditPage
