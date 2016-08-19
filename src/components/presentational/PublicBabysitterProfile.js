import React, { Component } from 'react';
import ReviewHolder from './ReviewHolder';
import Requests from './Requests';
import BabysitterProfileCard from './BabysitterProfileCard';
import {connect} from 'react-redux'

let PublicBabysitterProfile = class extends Component{
  render() {

    return(
    	<div className="ProfileCard">
            <BabysitterProfileCard img="" name={this.props.name} age={this.props.age} location={this.props.location} rating="5" bio={this.props.bio} skills={this.props.skills}/>
            <ReviewHolder />

    	</div>
    	)
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.viewableUser.viewableUser.name,
		age: state.viewableUser.account.babysitter.age,
		location: state.viewableUser.account.babysitter.location,
		bio: state.viewableUser.account.babysitter.bio,
		skills: state.viewableUser.account.babysitter.skills
	}
}

PublicBabysitterProfile = connect(mapStateToProps)(PublicBabysitterProfile)

export default PublicBabysitterProfile
