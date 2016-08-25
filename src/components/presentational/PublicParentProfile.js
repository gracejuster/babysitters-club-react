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
          <Col xs={0} md={2} />
          <Col xs={12} md={8} center>
            <Panel className="ProfileCard card">
              <ProfilePicture className="card-img-top" width={100} height={100} src="" alt="Parent"/>
              <h4 className="card-title text-center">{this.props.name}</h4>
              <p className="card-text text-center">Kids: {this.props.kid_count}</p>
              <p className="card-text text-center">Email: {this.props.email}</p>
            </Panel>
          </Col>
          <Col xs={0} md={2} />
        </Row>
      </Grid>
    )
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.viewableUser.viewableUser.name,
		kid_count: state.viewableUser.account.parent.kid_count,
		address: state.viewableUser.account.parent.address

	}
}

PublicParentProfile = connect(mapStateToProps)(PublicParentProfile)

export default PublicParentProfile
