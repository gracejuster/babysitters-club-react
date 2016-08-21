import React, { Component } from 'react';
import confirmNetworkRequest from '../../actions/confirmNetworkRequest';
import NetworkRequestTable from '../presentational/NetworkRequestTable';
import {connect} from 'react-redux';


let RequestsContainer = class extends Component {

	confirmNetworkRequest(NetworkRequestId){
		this.props.handleClick(NetworkRequestId, this.props.currentUser)
	}

	render(){
  return(
    <div className='Requests'>
			<NetworkRequestTable currentUser={this.props.currentUser} networkRequestArray={this.props.pendingNetworkRequests} type={this.props.type} confirmNetworkRequest={this.confirmNetworkRequest.bind(this)}/>
    </div>
    )}
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleClick:(requestId, currentUser) => {dispatch(confirmNetworkRequest(requestId, currentUser))}
  }
}

const mapStateToProps = (state) => {
  return {
    pendingNetworkRequests: state.currentUser.account.network_requests,
    currentUser: state.currentUser,
    type: state.currentUser.type
  }
}


RequestsContainer = connect(mapStateToProps, mapDispatchToProps)(RequestsContainer)

export default RequestsContainer
