import { connect } from 'react-redux';
import Network from '../presentational/Network'
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

const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(Network)

export default NetworkContainer
