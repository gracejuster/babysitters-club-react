import React, { PropTypes } from 'react';
import NetworkCard from './NetworkCard'

let Network = ({networksArray}) => {
	let networksList = networksArray.map((networkItem) => {
		return <NetworkCard name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Network'>
  		{networksList}
		</div>
	)
}

Network.propTypes = {
	networksArray: PropTypes.array.isRequired
}

export default Network

