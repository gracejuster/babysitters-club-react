import { connect } from 'react-redux';
import Network from '../presentational/Network'

const mapStateToProps = (state) => {
  //debugger
	return {
		networksObject: state.currentUser.account.network
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// clickOnName: (userId) => { dispatch(goToProfile(userId))}
// 	}
// }

const NetworkContainer = connect(
	mapStateToProps
)(Network)

export default NetworkContainer
