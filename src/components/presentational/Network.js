import React, { PropTypes } from 'react';
import NetworkCard from './NetworkCard'

let Network = ({networksArray, clickOnName}) => {
	let networksList = networksArray.map((networkItem) => {
		return <NetworkCard onClick={() => {clickOnName(networkItem.id)}} name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Network'>
  		{networksList}
		</div>
	)
}

Network.propTypes = {
	networksArray: PropTypes.array.isRequired,
	clickOnName: PropTypes.func.isRequired

}

export default Network
