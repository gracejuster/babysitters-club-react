import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
import createNetworkRequest from '../../actions/createNetworkRequest'
import ProfilePicture from '../../images/ProfilePicture'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

let PublicNetworkCard = class extends Component {
  handleNetworkRequest() {
    event.preventDefault()
     this.props.dispatch(createNetworkRequest(
       this.props.babysitter_id,
       this.props.currentUser))
   }

  render(){
    let button_state
    if (this.props.button_value === "SHOW BUTTON") {
      button_state = <Button onClick={this.handleNetworkRequest.bind(this)}>ADD TO NETWORK</Button>
    } else if (this.props.button_value === "PENDING NETWORK REQUEST"){
      button_state = <Button>PENDING NETWORK REQUEST</Button>
    }
      else {
        button_state = <Button>ALREADY IN YOUR NETWORK</Button>
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
