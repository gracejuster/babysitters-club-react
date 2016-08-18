import React, { PropTypes } from 'react';
import NetworkCard from './NetworkCard'

let Network = ({networkArray}) => {
	networkList = networkArray.map((networkObject) => {
		return <NetworkCard name={networkObject.name} location={networkObject.location} />
	})
	return (
		<div className='Network'>
  		{networkList}
		</div>
	)
}

Network.propTypes = {
	array: PropTypes.array.isRequired
}

export default Network
