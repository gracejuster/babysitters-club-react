import React, { PropTypes, Component } from 'react';
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'


let ParentProfileCard = class extends Component  {
  handleClick(){
    this.props.dispatch(getPublicViewableProfile(
      this.props.userId,
      this.props.currentUser)).then((resp) => {
        let type = resp.payload.type.toLowerCase()
        let username = resp.payload.current_user.username.toLowerCase()
        browserHistory.push(`/user/${type}/${username}`)
    })
  }

  render() {
    return(
      <div className="ProfileCard">
      <h6>Parent Profile Card </h6>
    <img />
    <br/>
      <p>Name: {this.props.name}</p>
      <p>Kids: {this.props.kid_count}</p>
      <p>Email: {this.props.email}</p>
      <button onClick={this.handleClick.bind(this)}>Get Full Profile</button>
      </div>
    )
  }
}


ParentProfileCard = connect()(ParentProfileCard)


export default ParentProfileCard
