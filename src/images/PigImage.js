import React from 'react'
import { Image } from 'react-bootstrap'
const PigImage = () => {
	 var source = ""
	 var x = Math.floor((Math.random() * 10) + 1)
	 if (x < 5) {
	 		source = "/src/images/piggy.png"
	 }
	 else {
	 		source = "/src/images/pig.jpeg"
	 }

	return (
  	<Image src={source} rounded />
  )
}

export default PigImage
