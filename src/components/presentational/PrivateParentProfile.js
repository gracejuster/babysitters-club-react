import React, { Component } from 'react';
import ParentProfileCard from './ParentProfileCard';

const PrivateParentProfile = class extends Component{
  render() {
    return(
    	<div className="ProfileCard">
            <ParentProfileCard img="" name="Grace" kid_count="16" location= "OH"/>
            <p>{this.props.specific_needs}</p>
            <p>{this.props.extra_requests}</p>
    	</div>
    	)
	}
}

export default PrivateParentProfile
