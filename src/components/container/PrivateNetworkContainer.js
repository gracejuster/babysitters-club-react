import { connect } from 'react-redux';
import PrivateNetwork from '../presentational/PrivateNetwork'
import getPublicUser from '../../actions/getPublicViewableProfile'

const mapStateToProps = (state) => {
	return {
		networksArray: state.currentUser.account.network,
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (userId, currentUser) => { dispatch(getPublicUser(userId, currentUser))}
	}
}

const PrivateNetworkContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateNetwork)

export default PrivateNetworkContainer
