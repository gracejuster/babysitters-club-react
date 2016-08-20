import React from 'react';

const BabysitterProfileCard = ({image, name, age, location, rating}) => {
	debugger
  return(
  	<div className="ProfileCard">
	<img src={image} alt="Babysitter"/>
    <p>{name}</p>
    <p>{age}</p>
    <p>{location}</p>
    <p>{rating}</p>
    </div>
  )
}

export default BabysitterProfileCard
