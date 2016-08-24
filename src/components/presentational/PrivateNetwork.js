import React, { PropTypes } from 'react';
import { Grid, Row, Col, Carousel } from 'react-bootstrap'
import PrivateNetworkCard from './PrivateNetworkCard'

let PrivateNetwork = ({networksArray, currentUser}) => {
	let networksList = []
	for (let i=0; i < networksArray.length; i+=3) {
		if (networksArray[i+2]) {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
					<Col xs={4} md= {4}>
					<PrivateNetworkCard
						currentUser={currentUser}
						user_id={networksArray[i].user_id}
						name={networksArray[i].name}
						location={networksArray[i].location}
					/></Col>
					<Col xs={4} md= {4}>
					<PrivateNetworkCard
						currentUser={currentUser}
						user_id={networksArray[(i+1)].user_id}
						name={networksArray[(i+1)].name}
						location={networksArray[(i+1)].location}
					/></Col>
					<Col xs={4} md= {4}>
					<PrivateNetworkCard
						currentUser={currentUser}
						user_id={networksArray[(i+2)].user_id}
						name={networksArray[(i+2)].name}
						location={networksArray[(i+2)].location}
					/></Col>
				</Row></Grid>
   		</Carousel.Item>
		)} else if (networksArray[i+2]) {
				networksList.push(
				<Carousel.Item>
					<Grid><Row className="show-grid">
						<Col xs={6} md= {4}>
						<PrivateNetworkCard
							currentUser={currentUser}
							user_id={networksArray[i].user_id}
							name={networksArray[i].name}
							location={networksArray[i].location}
						/></Col>
						<Col xs={6} md= {4}>
						<PrivateNetworkCard
							currentUser={currentUser}
							user_id={networksArray[(i+1)].user_id}
							name={networksArray[(i+1)].name}
							location={networksArray[(i+1)].location}
						/></Col>
					</Row></Grid>
	   		</Carousel.Item>
		)} else {
			networksList.push(
			<Carousel.Item>
				<Grid><Row className="show-grid">
					<Col xs={6} md= {4}>
					<PrivateNetworkCard
						currentUser={currentUser}
						user_id={networksArray[i].user_id}
						name={networksArray[i].name}
						location={networksArray[i].location}
					/></Col>
				</Row></Grid>
			</Carousel.Item>
		)}
	}
	return (
		<Carousel className='Network'>
  		{networksList}
		</Carousel>
	)
}

PrivateNetworkCard.propTypes = {
	networksArray: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
}

export default PrivateNetwork
