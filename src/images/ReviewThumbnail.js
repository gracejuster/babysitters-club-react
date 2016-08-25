import React from 'react'
import { Thumbnail } from 'react-bootstrap'

const ReviewThumbnail = () => {
	var x = Math.floor((Math.random() * 10) + 1)
	var source = `/src/images/png/${x}.png`

	return (
  	<Thumbnail className='ReviewThumbnail' src={source} />
  )
}

export default ReviewThumbnail
