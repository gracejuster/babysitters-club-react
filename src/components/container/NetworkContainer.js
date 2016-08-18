import { connect } from 'react-redux';
import Network from '../presentational/Network'

const mapStateToProps = (state) => {
	return {
		networkArray: state.currentUser.account.network
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// clickOnName: (userId) => { dispatch(goToProfile(userId))}
// 	}
// }

NetworkContainer = connect(
	mapStateToProps
)(Network)

export default NetworkContainer
