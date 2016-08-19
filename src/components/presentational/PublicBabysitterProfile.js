import React, { Component } from 'react';
import ReviewHolder from './ReviewHolder';
import Requests from './Requests';
import BabysitterProfileCard from './BabysitterProfileCard';

const PublicBabysitterProfile = class extends Component{
  render() {
    return(
    	<div className="ProfileCard">
            <BabysitterProfileCard img="" name="Gina" age="45" location="CO" rating="5" />
            <ReviewHolder />
          
    	</div>
    	)
	}
}

export default PublicBabysitterProfile
