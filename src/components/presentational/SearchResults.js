import React from 'react';
import { Grid } from 'react-bootstrap'
import ParentCard from './ParentCard'

let SearchResults = ({searchResultsObject, currentUser}) => {
	let SearchResultsList = searchResultsObject.map((searchResultItem) => {
		return <ParentCard loc={"search"} currentUser={currentUser} name={searchResultItem.attributes.name} kid_count={searchResultItem.attributes['kid-count']} email={searchResultItem.attributes.email} userId={searchResultItem.attributes['user-id']}/>
	})

	if (SearchResultsList.length===0){
		return (
			<div className='SearchResults'>
				<center><h2>There are no parents that match that name.</h2></center>
			</div>
		)
	} else {
		return (
			<Grid className='SearchResults'>
	  		{SearchResultsList}
			</Grid>
		)
	}
}

export default SearchResults
