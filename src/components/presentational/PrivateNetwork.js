import React, { PropTypes } from 'react';
import PrivateNetworkCard from './PrivateNetworkCard'

let PrivateNetwork = ({networksArray, currentUser}) => {
	let networksList = networksArray.map((networkItem) => {
		return <PrivateNetworkCard currentUser={currentUser} user_id={networkItem.user_id} name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Network'>
  		{networksList}
		</div>
	)
}

PrivateNetworkCard.propTypes = {
	networksArray: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
}

export default PrivateNetwork
