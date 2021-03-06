import React from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap'
import PrivateNetworkCard from '../container/PrivateNetworkCard'

let PrivateNetwork = ({networksArray, currentUser}) => {
	let privateNetworksList = networksArray.map((networkItem) => {
		return (
			<Col xs={4} md={4}>
				<PrivateNetworkCard
					currentUser={currentUser}
					user_id={networkItem.user_id}
					name={networkItem.name}
					location={networkItem.location}
					src={networkItem.profile_pic}
				/>
			</Col>
		)
	})

	let networksList = []

	for (let i=0; i < privateNetworksList.length; i+=3) {
		if (privateNetworksList[i+2]) {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
					{privateNetworksList[i]}
					{privateNetworksList[i+1]}
					{privateNetworksList[i+2]}
				</Row></Grid>
   		</Carousel.Item>
		)} else if (privateNetworksList[i+2]) {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
					{privateNetworksList[i]}
					{privateNetworksList[i+1]}
				</Row></Grid>
   		</Carousel.Item>
		)} else {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
					{privateNetworksList[i]}
				</Row></Grid>
			</Carousel.Item>
		)}
	}

	return (
		<Carousel className='PrivateNetwork' interval={false}>
  		{networksList}
		</Carousel>
	)
}

export default PrivateNetwork
