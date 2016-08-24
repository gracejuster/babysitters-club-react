import React, { Component } from 'react';
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
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
      <div className="PrivateNetworkCard NetworkCard card">
        <img className="card-img-top" src="" alt="User"/>
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.location}</p>
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>GET FULL PROFILE</button>
        </div>
      </div>
    )
  }
}

let SmartPrivateNetworkCard = connect()(PrivateNetworkCard)

export default SmartPrivateNetworkCard
