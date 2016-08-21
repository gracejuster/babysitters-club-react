import React, { PropTypes } from 'react';
import PublicNetworkCard from './PublicNetworkCard'

let PublicNetwork = ({networksArray, viewableUser,currentUser}) => {
	let publicNetworksList = networksArray.map((networkItem) => {
		return <PublicNetworkCard currentUser={currentUser} viewableUser={viewableUser} babysitter_id={networkItem.id} name={networkItem.name} location={networkItem.location} />
	})
	return (
		<div className='Public Network'>
  		{publicNetworksList}
		</div>
	)
}


export default PublicNetwork
