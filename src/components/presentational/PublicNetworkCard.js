import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Button } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import createNetworkRequest from '../../actions/createNetworkRequest'

let PublicNetworkCard = class extends Component {
  handleNetworkRequest() {
    event.preventDefault()
    this.props.dispatch(createNetworkRequest(this.props.babysitterId, this.props.currentUser)).then(() => {
      this.props.dispatch(getPublicViewableProfile(this.props.viewableUser.viewableUser.id, this.props.currentUser))
    })
  }

  render() {
    
    let buttonState

    if (this.props.buttonValue === "SHOW BUTTON") {
      buttonState = <Button onClick={this.handleNetworkRequest.bind(this)}>ADD BABYSITTER</Button>
    } else if (this.props.buttonValue === "PENDING NETWORK REQUEST"){
      buttonState = <h4 className="card-title">REQUEST PENDING</h4>
    } else {
      buttonState = <h4 className="card-title">IN NETWORK</h4>
    }

    return (
      <Panel className="PublicNetworkCard NetworkCard card">
        <ProfilePicture responsive className="card-img-top center-block" width={100} height={100} src="" alt="User"/>
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.location}</p>
          {buttonState}
        </div>
      </Panel>
    )
  }
}

export default connect()(PublicNetworkCard)
