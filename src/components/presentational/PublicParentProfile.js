import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ParentCard from './ParentCard'
import {connect} from 'react-redux'

let PublicParentProfile = class extends Component{
  render() {
    return (
      <Grid className="PublicParentProfile">
        <Row>
          <Col xs={3} md={4} />
            <ParentCard
              currentUser={this.props.currentUser}
              src={this.props.src}
              name={this.props.name}
              kid_count={this.props.kid_count}
              email={this.props.email}
              userId={this.props.user_id}
            />
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
    src: state.viewableUser.viewableUser.profile_pic,
    currentUser: state.currentUser
	}
}

PublicParentProfile = connect(mapStateToProps)(PublicParentProfile)

export default PublicParentProfile
