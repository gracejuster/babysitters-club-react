import { connect } from 'react-redux';
import Network from '../presentational/Network'

const mapStateToProps = (state) => {
	return {
		networksArray: state.currentUser.account.network
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// clickOnName: (userId) => { dispatch(goToProfile(userId))}
// 	}
// }

const NetworkContainer = connect(mapStateToProps)(Network)

export default NetworkContainer
