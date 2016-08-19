import React, { PropTypes } from 'react';

const ParentProfileCard = ({name, kid_count, email, userId}) => {
  debugger
    return(
    	<div className="ProfileCard">
      <h6>Parent Profile Card </h6>
  	<img />
  	<br/>
      <p>Name: {name}</p>
      <p>Kids: {kid_count}</p>
      <p>Email: {email}</p>
      </div>
    )
}

ParentProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  kid_count: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default ParentProfileCard
