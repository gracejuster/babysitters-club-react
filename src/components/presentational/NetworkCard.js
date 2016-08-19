import React, { PropTypes, Component } from 'react';
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'
import { connect } from 'react-redux';

let NetworkCard = class extends Component {

  handleClick(){
    this.props.dispatch(getPublicViewableProfile(this.props.user_id, this.props.currentUser))
  }

  render(){
    return (
      <div className="NetworkCard">
        <img src=""/>
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
