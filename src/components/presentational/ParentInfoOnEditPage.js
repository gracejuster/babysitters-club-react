import React, { Component } from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'
import { connect } from 'react-redux'

const ParentInfoOnEditPage = class extends Component {

  render(){
    let parent
    if (this.props.currentUser.account.attributes){
      parent = (
        <div>
          <p>KID COUNT: {this.props.currentUser.account.attributes['kid-count']}</p>
          <p>ADDRESS: {this.props.currentUser.account.attributes.address}</p>
          <p>SPECIFIC NEEDS: {this.props.currentUser.account.attributes['specific-needs']}</p>
          <p>EXTRA REQUESTS: {this.props.currentUser.account.attributes['extra_-equests']}</p>
        </div>

    )} else {
      parent = (
      <div>
        <p>KID COUNT: {this.props.currentUser.account.parent.kid_count}</p>
        <p>ADDRESS: {this.props.currentUser.account.parent.address}</p>
        <p>SPECIFIC NEEDS: {this.props.currentUser.account.parent.specific_needs}</p>
        <p>EXTRA REQUESTS: {this.props.currentUser.account.parent.extra_requests}</p>
      </div>
    )}
  
    return(
          <Panel className="ProfileCard card">
            <ProfilePicture alt="Parent"/>
            {parent}
          </Panel>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
  }
}

let SmartParentInfoOnEditPage = connect(mapStateToProps)(ParentInfoOnEditPage)



export default SmartParentInfoOnEditPage
