import React, { PropTypes } from 'react';
import ParentProfileCard from './ParentProfileCard'

let SearchResults = ({searchResultsObject}) => {
	let SearchResultsList = searchResultsObject.map((searchResultItem) => {
		debugger
		return <ParentProfileCard name={searchResultItem.name} kid_count={searchResultItem.kid_count} address={searchResultItem.address} />
	})
	return (
		<div className='SearchResults'>
  		{SearchResultsList}
		</div>
	)
}

SearchResults.propTypes = {
	searchResultsObject: PropTypes.object.isRequired
}

export default SearchResults
