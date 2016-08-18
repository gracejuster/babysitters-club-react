import React, { PropTypes } from 'react';
import NetworkCard from './NetworkCard'

let Network = ({networksObject}) => {
	let networksList = networksObject.map((networkItem) => {
		return <NetworkCard name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Network'>
  		{networksList}
		</div>
	)
}

Network.propTypes = {
	array: PropTypes.object.isRequired
}

export default Network

