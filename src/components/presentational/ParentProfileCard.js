import React, { Component } from 'react';

const ParentProfileCard = ({image, name, kid_count, location}) => {
  return(
  	<div className="ProfileCard">
	<img src={image}/>
    <p>{name}</p>
    <p>{kid_count}</p>
    <p>{location}</p>
    </div>
  )
}


