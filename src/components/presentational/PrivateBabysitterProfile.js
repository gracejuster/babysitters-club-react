import React, { Component } from 'react';
import CreateBookingForm from '../container/CreateBookingForm';
import CreateReviewForm from '../container/CreateReviewForm';
import BabysitterProfileCard from './BabysitterProfileCard'

const PublicBabysitterProfile = class extends Component{
  render() {
    return(
    	<div className="PublicBabysitterProfile"> 
            <BabysitterProfileCard img="" name="Gina" age="45" location="CO" rating="5" />
            <CreateBookingForm />
            <CreateReviewForm />
    	</div>
    	)
	}
}

export default PublicBabysitterProfile