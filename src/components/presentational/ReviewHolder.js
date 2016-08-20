import React from 'react'
import Review from './Review.js'

const ReviewHolder = ({reviews}) => {
  let reviewList = reviews.map((review) => {
		return <Review  />
	})
  return(
    <div className="ReviewHolder">
    	<h1>Reviews</h1>
      {reviewList}
    </div>
  )
}

export default ReviewHolder
