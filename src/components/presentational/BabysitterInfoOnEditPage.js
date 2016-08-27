import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'


let BabysitterInfoOnEditPage = ({currentUser}) => {

    title = <h3>currentUser.currentUser.name</h3>

    return(
      <Panel className="ProfileCard" header={title}>
        <img alt="Babysitter"/>
        <br/>
        <p>Age: {currentUser.account.babysitter.age}</p>
        <p>Address: {currentUser.account.babysitter.location}</p>
        <p>Bio: {currentUser.account.babysitter.bio}</p>
        <p>Skills: {currentUser.account.babysitter.skills}</p>
      </Panel>
    )
}

export default BabysitterInfoOnEditPage
