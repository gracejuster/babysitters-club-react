import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import ProfilePicture from '../../images/ProfilePicture'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

let PrivateNetworkCard = class extends Component {
  handleClick(){
    // event.preventDefault()
    this.props.dispatch(getPublicViewableProfile(
      this.props.user_id,
      this.props.currentUser)).then((resp) => {
        let type = resp.payload.type.toLowerCase()
        let username = resp.payload.viewable_user.username.toLowerCase()
        browserHistory.push(`/user/${type}/${username}`)
    })
  }

  render(){
    return (
      <Panel className="PrivateNetworkCard NetworkCard card">
        <ProfilePicture responsive className="card-img-top center-block" width={100} height={100} src="" alt="User" />
        <div className="card-block">
          <h4 className="card-title text-center">{this.props.name}</h4>
          <p className="card-text text-center">{this.props.location}</p>
          <Button block className="center-block" onClick={this.handleClick.bind(this)}>GET FULL PROFILE</Button>
        </div>
      </Panel>
    )
  }
}

let SmartPrivateNetworkCard = connect()(PrivateNetworkCard)

export default SmartPrivateNetworkCard
