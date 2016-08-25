import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap'
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import ProfilePicture from '../../images/ProfilePicture'


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
      <ProfilePicture className="card-img-top" width={100} height={100} src="" alt="Parent"/>
      <div className="card-block">
        <h4 className="card-title text-center">{this.props.name}</h4>
        <p className="card-text text-center">Kids: {this.props.kid_count}</p>
        <p className="card-text text-center">Email: {this.props.email}</p>
        <Button block className="center-block" onClick={this.handleClick.bind(this)}>Get Full Profile</Button>
      </div>
      </Panel>
    )
  }
}

ParentCard = connect()(ParentCard)

export default ParentCard
