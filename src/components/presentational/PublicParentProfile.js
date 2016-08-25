import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import ParentCard from './ParentCard';
import {connect} from 'react-redux';
import ProfilePicture from '../../images/ProfilePicture'

let PublicParentProfile = class extends Component{
  render() {
    return(
      <Grid className="PublicParentProfile">
        <Row>
          <Col xs={3} md={4} />
            <ParentCard
              currentUser={this.props.currentUser}
              name={this.props.name}
              kid_count={this.props.kid_count}
              email={this.props.email}
              userId={this.props.user_id}/>
          <Col xs={3} md={4} />
        </Row>
        <Row><header>BABYSITTERS</header></Row>
      </Grid>
    )
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.viewableUser.viewableUser.name,
		kid_count: state.viewableUser.account.parent.kid_count,
		address: state.viewableUser.account.parent.address,
    email: state.viewableUser.viewableUser.email,
    user_id: state.viewableUser.viewableUser.id,
    currentUser: state.currentUser
	}
}

PublicParentProfile = connect(mapStateToProps)(PublicParentProfile)

export default PublicParentProfile
