import React from 'react'
import { Image } from 'react-bootstrap'
const BabysitterImage = () => {
	 var source = ""
	 var x = Math.floor((Math.random() * 10) + 1)

	 if (x == 1) {
	 		source = "/src/images/babysitter1.jpg"
	 }
	 else if (x == 2) {
	 		source = "/src/images/babysitter2.jpg"
	 }
	 else if (x == 3) {
	 		source = "/src/images/babysitter3.jpg"
	 }
	 else if (x == 4) {
	 		source = "/src/images/babysitter4.jpg"
	 }
	 else (x == 5) {
	 		source = "/src/images/babysitter5.jpg"
	 }




	return (
  	<Image src={source} rounded />
  )
}

export default BabysitterImage