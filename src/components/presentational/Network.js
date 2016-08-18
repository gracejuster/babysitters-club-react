import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NetworkCard from './NetworkCard'

let Network = ({array}) => {
	network_list = array.map((network_item) => {
		return <NetworkCard />
	})
	return (
		<div className='Network'>
  			"This is my network"
		</div>
	)
}

Network.propTypes = {
	array: PropTypes.array.isRequired
}

// Everything below here should probably be in a NetworkContainer component

const mapStateToProps = (state) => {
	return {
		// prop: state.something
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// clickOnName: (userId) => { dispatch(goToProfile(userId))}
	}
}

Network = connect(
	mapStateToProps,
	mapDispatchToProps
)(Network)

export default Network
