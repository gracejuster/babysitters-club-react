import React, { Component } from 'react'
import {connect} from 'react-redux'
import NetworkRequestTable from '../presentational/NetworkRequestTable'
import confirmNetworkRequest from '../../actions/confirmNetworkRequest'
import retrieveUser from '../../actions/retrieveUser'

let RequestsContainer = class extends Component {
	confirmNetworkRequest(NetworkRequestId){
		let currentUser = this.props.currentUser
		this.props.confirmNetworkRequest(NetworkRequestId, currentUser).then((resp)=>{
			this.props.retrieveUser(currentUser)
    })

	}

	render(){
	  return (
	    <div className='Requests'>
				<NetworkRequestTable
					currentUser={this.props.currentUser}
					retrieveUser={this.props.retrieveUser}
					networkRequestArray={this.props.pendingNetworkRequests}
					type={this.props.type}
					confirmNetworkRequest={this.confirmNetworkRequest.bind(this)}
				/>
	    </div>
	  )
	}
}

const mapStateToProps = (state) => {
  return {
    pendingNetworkRequests: state.currentUser.account.network_requests,
    currentUser: state.currentUser,
    type: state.currentUser.type
  }
}


RequestsContainer = connect(mapStateToProps, { confirmNetworkRequest, retrieveUser })(RequestsContainer)

export default RequestsContainer
