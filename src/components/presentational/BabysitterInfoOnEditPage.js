import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'


let BabysitterInfoOnEditPage = ({currentUser}) => {
    title = <h3>currentUser.currentUser.name</h3>
    return(
      <Panel className="ProfileCard" header={title}>
      <img alt="Babysitter"/>
      <br/>
      <p>KID COUNT: {currentUser.account.babysitter.age}</p>
      <p>ADDRESS: {currentUser.account.babysitter.location}</p>
      <p>BIO: {currentUser.account.babysitter.bio}</p>
      <p>SKILLS: {currentUser.account.babysitter.skills}</p>
      </Panel>
    )
}

export default BabysitterInfoOnEditPage
