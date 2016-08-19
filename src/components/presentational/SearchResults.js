import React, { PropTypes } from 'react';
import ParentProfileCard from './ParentProfileCard'

let SearchResults = ({searchResultsObject, currentUser}) => {
	let SearchResultsList = searchResultsObject.map((searchResultItem) => {
		return <ParentProfileCard currentUser={currentUser} name={searchResultItem.attributes.name} kid_count={searchResultItem.attributes['kid-count']} email={searchResultItem.attributes.email} userId={searchResultItem.attributes['user-id']}/>
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
