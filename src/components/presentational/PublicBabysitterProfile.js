import React, { Component } from 'react';
import ReviewHolder from './ReviewHolder';
import BabysitterProfileCard from './BabysitterProfileCard';
import {connect} from 'react-redux'

const PublicBabysitterProfile = ({name, age, location, bio, skills}) => {
  render() {
    return (
    	<div className="ProfileCard">
        <BabysitterProfileCard
          name={name}
          age={age}
          location={location}
          rating="5"
          bio={bio}
          skills={skills}
        />
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

export default connect(mapStateToProps)(PublicBabysitterProfile)
