import Review from './Review.js';
import React, { Component } from 'react';

let ReviewHolder = ( {reviews} ) => {
		let finalreviews =  reviews.map( (review) => {
			 return <Review title={review.title} description={review.description} rating={review.rating} />
  	})
  	return(
			<div className='reviews'>
				{finalreviews}
			</div>
		)
  }

  

	export default ReviewHolder
