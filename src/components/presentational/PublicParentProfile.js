import React, { Component } from 'react';
import ParentProfileCard from './ParentProfileCard';
import Network from './Network';

const PublicParentProfile = class extends Component{
  render() {
    return(
    	<div className="PublicParentProfile"> 
            <ParentProfileCard img="" name="Grace" kid_count="16" location= "OH"/>
    		<Network />
    	</div>
    	)
	}
}

export default PublicParentProfile