import React, { Component } from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'
import { connect } from 'react-redux'


let ParentInfoOnEditPage = ({currentUser}) => {
    let parent
    if (currentUser.account.attributes){
      parent = (
        <div>
          <p>KID COUNT: {currentUser.account.attributes['kid-count']}</p>
          <p>ADDRESS: {currentUser.account.attributes.address}</p>
          <p>SPECIFIC NEEDS: {currentUser.account.attributes['specific-needs']}</p>
          <p>EXTRA REQUESTS: {currentUser.account.attributes['extra_-equests']}</p>
        </div>

    )} else {
      parent = (
      <div>
        <p>KID COUNT: {currentUser.account.parent.kid_count}</p>
        <p>ADDRESS: {currentUser.account.parent.address}</p>
        <p>SPECIFIC NEEDS: {currentUser.account.parent.specific_needs}</p>
        <p>EXTRA REQUESTS: {currentUser.account.parent.extra_requests}</p>
      </div>
    )}

    return(
          <Panel className="ProfileCard card">
            <ProfilePicture alt="Parent"/>
            {parent}
          </Panel>
    )
}

// function mapStateToProps(state){
//   return{
//     currentUser: state.currentUser,
//   }
// }
//
// let SmartParentInfoOnEditPage = connect(mapStateToProps)(ParentInfoOnEditPage)
//


export default ParentInfoOnEditPage
