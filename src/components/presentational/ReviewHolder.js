import Review from './Review.js';
import React from 'react';

let ReviewHolder = ({reviews}) => {
		let finalreviews =  reviews.map((review) => {
			 return <Review key={review.id} title={review.title} description={review.description} rating={review.rating} />
  	})
  	return(
			<div className='reviews'>
				{finalreviews}
			</div>
		)
  }

export default ReviewHolder
