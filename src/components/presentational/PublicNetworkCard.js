import React, { Component } from 'react';
import createNetworkRequest from '../../actions/createNetworkRequest'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

let PublicNetworkCard = class extends Component {
  // handleClick(){
  //
  //   // event.preventDefault()
  //   this.props.dispatch(getPublicViewableProfile(
  //     this.props.user_id,
  //     this.props.currentUser)).then((resp) => {
  //       let type = resp.payload.type.toLowerCase()
  //       let username = resp.payload.viewable_user.username.toLowerCase()
  //       browserHistory.push(`/user/${type}/${username}`)
  //   })
  // }

  handleNetworkRequest() {
    event.preventDefault()
     this.props.dispatch(createNetworkRequest(
       this.props.babysitter_id,
       this.props.currentUser))
   }



  render(){
    return (
      <div className="NetworkCard">
        <img src="" alt="User"/>
        <br/>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        {/* <button onClick={this.handleClick.bind(this)}>GET FULL PROFILE</button> */}
        <button onClick={this.handleNetworkRequest.bind(this)}>ADD TO NETWORK</button>
      </div>
    )
  }
}

let SmartPublicNetworkCard = connect()(PublicNetworkCard)

export default SmartPublicNetworkCard
