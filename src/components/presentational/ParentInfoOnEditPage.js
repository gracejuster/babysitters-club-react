import React, { Component } from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'
import { connect } from 'react-redux'


let ParentInfoOnEditPage = ({currentUser}) => {

    return(
      <Panel className="ProfileCard card">
        <ProfilePicture alt="Parent"/>
        <p>KID COUNT: {currentUser.account.parent.kid_count}</p>
        <p>ADDRESS: {currentUser.account.parent.address}</p>
        <p>SPECIFIC NEEDS: {currentUser.account.parent.specific_needs}</p>
        <p>EXTRA REQUESTS: {currentUser.account.parent.extra_requests}</p>
      </Panel>
    )
}


export default ParentInfoOnEditPage
