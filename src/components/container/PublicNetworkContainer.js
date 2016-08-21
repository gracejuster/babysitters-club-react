import { connect } from 'react-redux';
import PublicNetwork from '../presentational/PublicNetwork'
import getPublicUser from '../../actions/getPublicViewableProfile'

const mapStateToProps = (state) => {
	return {
		networksArray: state.viewableUser.account.network,
		viewableUser: state.viewableUser,
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickOnName: (userId) => { dispatch(getPublicUser(userId))}
	}
}

const PublicNetworkContainer = connect(mapStateToProps, mapDispatchToProps)(PublicNetwork)

export default PublicNetworkContainer
