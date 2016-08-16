import React, { Component } from 'react';
import Network from './Network';
import ReviewHolder from './ReviewHolder';
import Requests from './Requests';

const PublicBabysitterProfile = class extends Component{
  render() {
    return(
    	<div className="PublicBabysitterProfile"> 
    		<img src=""/>
    		<p>{this.props.name}</p>
    		<p>{this.props.age}</p>
    		<p>{this.props.location}</p>
            <p>{this.props.rating}</p>
    		<Network />
            <ReviewHolder />
            <Requests />
    	</div>
    	)
	}
}

export default PublicBabysitterProfile