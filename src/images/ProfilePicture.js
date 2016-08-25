import React from 'react'
import { Image } from 'react-bootstrap'
const ProfilePicture = () => {
	 var x = Math.floor((Math.random() * 10) + 1)
	 var source = `/src/images/png/${x}.png`
	 



	return (
  		<Image className='ProfilePicture' src={source} rounded/>
  )
}

export default ProfilePicture
