import React, { PropTypes, Component } from 'react';
import getPublicViewableProfile from '../../actions/getPublicViewableProfile'

const NetworkCard = class extends Component {

  handleClick(){
    getPublicViewableProfile(this.props.user_id, this.props.currentUser)
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

//
// NetworkCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired
// }

export default NetworkCard
