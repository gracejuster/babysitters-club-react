import React, { PropTypes } from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap'
import PublicNetworkCard from './PublicNetworkCard'

let PublicNetwork = ({networksArray, viewableUser,currentUser}) => {
	let publicNetworksList = networksArray.map((networkItem) => {
		return (
			<Col xs={4} md= {4}>
				<PublicNetworkCard
					currentUser={currentUser}
					viewableUser={viewableUser}
					babysitter_id={networkItem.id}
					name={networkItem.name}
					location={networkItem.location}
				/>
			</Col>
		)
	})
	let networksList = []
	for (let i=0; i < publicNetworksList.length; i+=3) {
		if (publicNetworksList[i+2]) {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
						{publicNetworksList[i]}
						{publicNetworksList[i+1]}
						{publicNetworksList[i+2]}
				</Row></Grid>
   		</Carousel.Item>
		)} else if (publicNetworksList[i+2]) {
				networksList.push(
				<Carousel.Item>
					<Grid><Row className="show-grid">
						{publicNetworksList[i]}
						{publicNetworksList[i+1]}
					</Row></Grid>
	   		</Carousel.Item>
		)} else {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
						{publicNetworksList[i]}
				</Row></Grid>
			</Carousel.Item>
		)}
	}
	return (
		<Carousel className='PublicNetwork'>
  		{networksList}
		</Carousel>
	)
}


export default PublicNetwork
