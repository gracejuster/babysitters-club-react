import React, { Component } from 'react';
import CreateBookingForm from '../container/CreateBookingForm';
import CreateReviewForm from '../container/CreateReviewForm';
import BabysitterProfileCard from './BabysitterProfileCard';
import ReviewHolder from './ReviewHolder';
import {connect} from 'react-redux'

let PrivateBabysitterProfile = class extends Component{
  render() {
    return(
    	<div className="ProfileCard">
            <BabysitterProfileCard img="" name={this.props.name} age={this.props.age} location={this.props.location} rating="5" bio={this.props.bio} skills={this.props.skills} reviews={this.props.reviews}/>
            <header>REQUEST BOOKING</header>
            <CreateBookingForm />
            <br />
            <header>LEAVE A REVIEW</header>
            <CreateReviewForm />
            <ReviewHolder reviews={this.props.reviews}/>
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
        skills: state.viewableUser.account.babysitter.skills,
        reviews: state.viewableUser.account.reviews
    }
}

PrivateBabysitterProfile = connect(mapStateToProps)(PrivateBabysitterProfile)

export default PrivateBabysitterProfile
