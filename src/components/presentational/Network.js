import React, { PropTypes } from 'react';
import NetworkCard from './NetworkCard'

let Network = ({networksArray, onClick, currentUser}) => {
	let networksList = networksArray.map((networkItem) => {
		return <NetworkCard onClick={() => onClick} currentUser={currentUser} user_id={networkItem.id} name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Network'>
  		{networksList}
		</div>
	)
}

Network.propTypes = {
	networksArray: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired

}

export default Network
