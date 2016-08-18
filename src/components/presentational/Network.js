import React, { PropTypes } from 'react';
import NetworkCard from './NetworkCard'

let Network = ({networksObject}) => {
	debugger
	let networksList = networksObject.map((networkItem) => {
		return <NetworkCard name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Network'>
  		{networksList}
		</div>
	)
}

// Network.propTypes = {
// 	array: PropTypes.array.isRequired
// }

export default Network
