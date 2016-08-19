import React, { PropTypes } from 'react';
import ParentProfileCard from './ParentProfileCard'

let SearchResults = ({searchResultsObject}) => {
	debugger
	let SearchResultsList = searchResultsObject.map((searchResultItem) => {
		return <ParentProfileCard name={searchResultItem.attributes.name} kid_count={searchResultItem.attributes["associated-user"].kid_count} address={searchResultItem.attributes["associated-user"].address} />
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
