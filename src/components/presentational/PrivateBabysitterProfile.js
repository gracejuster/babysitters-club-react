import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Tabs, Tab } from 'react-bootstrap'
import CreateBookingForm from '../container/CreateBookingForm';
import CreateReviewForm from '../container/CreateReviewForm';
import BabysitterProfileCard from './BabysitterProfileCard';
import PigImage from '../../images/PigImage'
import ReviewHolder from './ReviewHolder';
import {connect} from 'react-redux'

let PrivateBabysitterProfile = class extends Component{
  render() {
    return(
    	<Grid className="ProfileCard">
        <Row>
          <Col xs={6} md={6}>
          <BabysitterProfileCard
            name={this.props.name}
            age={this.props.age}
            location={this.props.location}
            rating="5" bio={this.props.bio}
            skills={this.props.skills}
            reviews={this.props.reviews}
          />
          </Col>
          <Col xs={6} md={6}>
          <Panel style={{overflow: "scroll"}}>
            <Tabs>
              <Tab eventKey={1} title="Book A Babysitter">
                <header>REQUEST BOOKING</header>
                <CreateBookingForm />
              </Tab>
              <Tab eventKey={2} title="Leave A Review">
                <header>LEAVE A REVIEW</header>
                <CreateReviewForm />
              </Tab>
              <Tab eventKey={3} title="All Reviews">
                <header>REVIEWS</header>
                <ReviewHolder reviews={this.props.reviews}/>
              </Tab>
            </Tabs>
          </Panel>
          </Col>
        </Row>
    	</Grid>
    	)
	}
}


const mapStateToProps = (state) => {
  return {
    name: state.viewableUser.viewableUser.name,
    age: state.viewableUser.account.babysitter.age,
    location: state.viewableUser.account.babysitter.location,
    bio: state.viewableUser.account.babysitter.bio,
    skills: state.viewableUser.account.babysitter.skills,
    reviews: state.viewableUser.account.reviews
  }
}

PrivateBabysitterProfile = connect(mapStateToProps)(PrivateBabysitterProfile)

export default PrivateBabysitterProfile
