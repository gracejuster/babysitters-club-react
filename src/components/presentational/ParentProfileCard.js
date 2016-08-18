import React, { PropTypes } from 'react';

const ParentProfileCard = ({name, kid_count, location}) => {
  return(
  	<div className="ProfileCard">
	<img />
	<br/>
    <p>{name}</p>
    <p>{kid_count}</p>
    <p>{location}</p>
    </div>
  )
}

ParentProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  kid_count: PropTypes.integer.isRequired,
  location: PropTypes.string.isRequired
}

export default ParentProfileCard
