import { connect } from 'react-redux';
import Network from '../presentational/Network'
import getPublicUser from '../../actions/getPublicViewableProfile'

const mapStateToProps = (state) => {
	return {
		networksArray: state.viewableUser.account.network
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickOnName: (userId) => { dispatch(getPublicUser(userId))}
	}
}

const NetworkContainer = connect(mapStateToProps, mapDispatchToProps)(Network)

export default NetworkContainer
