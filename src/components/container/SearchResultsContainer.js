import { connect } from 'react-redux';
import SearchResults from '../presentational/SearchResults'

const mapStateToProps = (state) => {
	debugger
	return {
		searchResultsObject: state.search.parents.ids //have user ids of all craigs 

	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// clickOnName: (userId) => { dispatch(goToProfile(userId))}
// 	}
// }

const SearchResultsContainer = connect(mapStateToProps)(SearchResults)

export default SearchResultsContainer

