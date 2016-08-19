import { connect } from 'react-redux';
import SearchResults from '../presentational/SearchResults'

const mapStateToProps = (state) => {
	return {
		searchResultsObject: state.search.parents,
	  currentUser: state.currentUser
	}
}

const SearchResultsContainer = connect(mapStateToProps)(SearchResults)

export default SearchResultsContainer
