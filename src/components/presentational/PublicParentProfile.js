import React, { Component } from 'react';
import ParentCard from './ParentCard';
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

const mapStateToProps = (state) => {
	return {
		name: state.viewableUser.viewableUser.name,
		kid_count: state.viewableUser.account.parent.kid_count,
		address: state.viewableUser.account.parent.address

	}
}

PublicParentProfile = connect(mapStateToProps)(PublicParentProfile)

export default PublicParentProfile
