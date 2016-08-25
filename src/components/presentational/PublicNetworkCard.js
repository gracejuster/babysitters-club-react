import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'
import createNetworkRequest from '../../actions/createNetworkRequest'
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
    return (
      <Panel className="PublicNetworkCard NetworkCard card">
        <img className="card-img-top" width={100} height={100} src="" alt="User"/>
        <div className="card-block">
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.location}</p>
          {/* <button onClick={this.handleClick.bind(this)}>GET FULL PROFILE</button> */}
          <button className="btn btn-primary" onClick={this.handleNetworkRequest.bind(this)}>ADD TO NETWORK</button>
        </div>
      </Panel>
    )
  }
}

let SmartPublicNetworkCard = connect()(PublicNetworkCard)

export default SmartPublicNetworkCard
