import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import ParentCard from './ParentCard';
import {connect} from 'react-redux'

let PublicParentProfile = class extends Component{
  render() {
    return(
      <Grid className="PublicParentProfile">
        <Row>
          <Col xs={0} md={2} />
          <Col xs={12} md={8} center>
            <ParentCard img="" name={this.props.name} kid_count={this.props.kid_count} location={this.props.location}/>
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
