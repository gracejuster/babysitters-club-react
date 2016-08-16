// Public Parent Profile
// - navbar: NavBar .
// - main:
//   - PublicParentProfile ?
//     - ParentProfileCard(image/avatar/something, basicinfo, babysitternetwork)
//     - POSSIBLY accept request if babysitter is viewing

import React, { Component } from 'react';
import Network from './Network';

const PublicParentProfile = class extends Component{
  render() {
    return(
    	<div className="PublicParentProfile"> 
    		<img src=""/>
    		<p>{name}</p>
    		<p>{kids}</p>
    		<p>{location}</p>
    		<Network />
    	</div>
    	)
	}
}

export default PublicParentProfile