import React, { Component } from 'react';
import Network from './Network';

const PrivateParentProfile = class extends Component{
  render() {
    return(
    	<div className="PublicParentProfile">
    		<img src=""/>
    		<p>{name}</p>
    		<p>{kids}</p>
    		<p>{location}</p>
    	</div>
    	)
	}
}

export default PrivateParentProfile
