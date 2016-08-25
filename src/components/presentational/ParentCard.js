import React, { Component } from 'react';
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'


let ParentCard = class extends Component  {
  handleClick(){
    this.props.dispatch(getPublicViewableProfile(
      this.props.userId,
      this.props.currentUser)).then((resp) => {
        let type = resp.payload.type.toLowerCase()
        let username = resp.payload.viewable_user.username.toLowerCase()
        browserHistory.push(`/user/${type}/${username}`)
    })
  }

  render() {

    return(
      <Panel className="ProfileCard card">
      <img className="card-img-top" width={100} height={100} src="" alt="Parent"/>
      <div className="card-block"
        <h4 className="card-title">{this.props.name}</p>
        <p className="card-text">Kids: {this.props.kid_count}</p>
        <p className="card-text">Email: {this.props.email}</p>
        <button onClick={this.handleClick.bind(this)}>Get Full Profile</button>
      </div>
      </Panel>
    )
  }
}

ParentCard = connect()(ParentCard)

export default ParentCard
