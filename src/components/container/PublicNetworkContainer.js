import { connect } from 'react-redux';
import Network from '../presentational/Network'
import GetPublicUser from '../../actions/getPublicViewableProfile'

const mapStateToProps = (state) => {
	return {
		networksArray: state.currentUser.account.network
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickOnName: (userId) => { dispatch(GetPublicUser(userId))}
	}
}

const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(Network)

export default NetworkContainer
