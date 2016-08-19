import React, { Component } from 'react';
import ParentCard from './ParentCard';
import Network from './Network';
import {connect} from 'react-redux'

let PublicParentProfile = class extends Component{
  render() {
    return(
    	<div className="PublicParentProfile">
          <ParentCard img="" name={this.props.name} kid_count={this.props.kid_count} location={this.props.location}/>
    	</div>
    	)
	}
}

const mapStateToProps = ({state}) => {
	return(
		name: state.viewableUser.viewableUser.name,
		kid_count: state.viewableUser.account.kid_count,
		location: state.viewableUser.account.location
	)
}

PublicParentProfile = connect(mapStateToProps)(PublicParentProfile)

export default PublicParentProfile
