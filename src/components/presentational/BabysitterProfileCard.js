import React, { Component } from 'react';

const BabysitterProfileCard = ({image, name, age, location, rating}) => {
  return(
  	<div className="ProfileCard">
	<img src={image}/>
    <p>{name}</p>
    <p>{age}</p>
    <p>{location}</p>
    <p>{rating}</p>
    </div>
  )
}

export default BabysitterProfileCard
