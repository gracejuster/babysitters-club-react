import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
import createNetworkRequest from '../../actions/createNetworkRequest'
import ProfilePicture from '../../images/ProfilePicture'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'

let PublicNetworkCard = class extends Component {
  handleNetworkRequest() {
    event.preventDefault()
    this.props.dispatch(createNetworkRequest(this.props.babysitter_id,this.props.currentUser))
    this.props.dispatch(getPublicViewableProfile(this.props.viewableUser.viewableUser.id, this.props.currentUser))
   }

  render(){
    let button_state
    if (this.props.button_value === "SHOW BUTTON") {
      button_state = <Button onClick={this.handleNetworkRequest.bind(this)}>ADD BABYSITTER</Button>
    } else if (this.props.button_value === "PENDING NETWORK REQUEST"){
      button_state = <h4 className="card-title">REQUEST PENDING</h4>
    }
      else {
        button_state = <h4 className="card-title">IN NETWORK</h4>
      }


    return (
      <Panel className="PublicNetworkCard NetworkCard card">
        <ProfilePicture responsive className="card-img-top center-block" width={100} height={100} src="" alt="User"/>
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.location}</p>
          {/* <button onClick={this.handleClick.bind(this)}>GET FULL PROFILE</button> */}
          {button_state}

        </div>
      </Panel>
    )
  }
}

let SmartPublicNetworkCard = connect()(PublicNetworkCard)

export default SmartPublicNetworkCard
