import React, { Component } from 'react';
import EditParentCard from '../presentational/EditParentCard';
import { connect } from 'react-redux'

const EditParentProfileContainer = class extends Component{
  render() {
    return(
      <EditParentCard />
    )
	}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}


EditParentProfileContainer = connect(mapStateToProps)(EditParentProfileContainer)

export default EditParentProfileContainer
