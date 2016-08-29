import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

let BabysitterInfoOnEditPage = ({currentUser}) => {
  let attributes

  if (currentUser.account.babysitter) {
    attributes = (
      <div>
        <p>Age: {currentUser.account.babysitter.age}</p>
        <p>Address: {currentUser.account.babysitter.location}</p>
        <p>Bio: {currentUser.account.babysitter.bio}</p>
        <p>Skills: {currentUser.account.babysitter.skills}</p>
      </div>

    )
  } else {
    attributes = (
      <div>
        <p>Age: {currentUser.account.attributes.age}</p>
        <p>Address: {currentUser.account.attributes.location}</p>
        <p>Bio: {currentUser.account.attributes.bio}</p>
        <p>Skills: {currentUser.account.attributes.skills}</p>
      </div>

    )
  }

  return (
    <Panel className="ProfileCard" header={currentUser.currentUser.name}>
      <img alt="Babysitter"/>
      <br/>
        {attributes}
    </Panel>
  )
}

export default BabysitterInfoOnEditPage
