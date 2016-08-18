import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

let Network = ({name, }) => {

	return (
		<div className='Network'>
  			"This is my network"
		</div>
	)
}

Network.propTypes = {
	name: PropTypes.string.isRequired
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
