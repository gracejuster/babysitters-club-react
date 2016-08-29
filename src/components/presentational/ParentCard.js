import React, { Component } from 'react';
import { Panel, Button, Col } from 'react-bootstrap'
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
    let get_full_profile

    if (this.props.loc === "search") {
      get_full_profile = <Button block className="center-block" onClick={this.handleClick.bind(this)}>Get Full Profile</Button>
    } else {
      get_full_profile = <div />
    }

    return (
      <Col xs={6} md={4}>
      <Panel className="ProfileCard card">
        <ProfilePicture className="card-img-top" width={150} height={150} alt="Parent"/>
        <div className="card-block">
          <h4 className="card-title text-center">{this.props.name}</h4>
          <p className="card-text text-center">Kids: {this.props.kid_count}</p>
          <p className="card-text text-center">Email: {this.props.email}</p>
          {get_full_profile}
        </div>
      </Panel>
      </Col>
    )
  }
}

ParentCard = connect()(ParentCard)

export default ParentCard
