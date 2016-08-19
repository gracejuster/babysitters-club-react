import React, { Component } from 'react';
import CreateBookingForm from '../container/CreateBookingForm';
import CreateReviewForm from '../container/CreateReviewForm';
import BabysitterProfileCard from './BabysitterProfileCard'

const PrivateBabysitterProfile = class extends Component{
  render() {
    return(
    	<div className="ProfileCard">
            <BabysitterProfileCard img="" name="Gina" age="45" location="CO" rating="5" />
            <header>REQUEST BOOKING</header>
            <CreateBookingForm />
            <br />
            <header>LEAVE A REVIEW</header>
            <CreateReviewForm />
    	</div>
    	)
	}
}

export default PrivateBabysitterProfile
