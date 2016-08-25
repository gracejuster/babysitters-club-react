import React from 'react'
import { Image } from 'react-bootstrap'
const ParentImage = () => {
	 var source = ""
	 var x = Math.floor((Math.random() * 10) + 1)

	 if (x == 1) {
	 		source = "/src/images/parent1.jpg"
	 }
	 else if (x == 2) {
	 		source = "/src/images/parent2.jpg"
	 }
	 else if (x == 3) {
	 		source = "/src/images/parent3.jpg"
	 }
	 else if (x == 4) {
	 		source = "/src/images/parent4.jpg"
	 }
	 else (x == 5) {
	 		source = "/src/images/parent5.jpg"
	 }




	return (
  	<Image src={source} rounded />
  )
}

export default ParentImage
