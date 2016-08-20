import React, { Component } from 'react';
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

let NetworkCard = class extends Component {
  handleClick(){
    // event.preventDefault()
    this.props.dispatch(getPublicViewableProfile(
      this.props.user_id,
      this.props.currentUser)).then((resp) => {
        debugger
        let type = resp.payload.type.toLowerCase()
        let username = resp.payload.viewable_user.username.toLowerCase()
        browserHistory.push(`/user/${type}/${username}`)
    })
  }

  render(){
    return (
      <div className="NetworkCard">
        <img src="" alt="User"/>
        <br/>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <button onClick={this.handleClick.bind(this)}>Get Full Profile</button>
      </div>
    )
  }
}

NetworkCard = connect()(NetworkCard)

export default NetworkCard
