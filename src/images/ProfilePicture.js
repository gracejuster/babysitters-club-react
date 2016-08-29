import React from 'react'
import { Image } from 'react-bootstrap'

const ProfilePicture = ({src}) => {
	return (
  	<Image className='ProfilePicture center-block' src={src} responsive rounded/>
  )
}

export default ProfilePicture
