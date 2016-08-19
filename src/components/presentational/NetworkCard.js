import React, { PropTypes } from 'react';

const NetworkCard = ({name, location, onClick}) => {
debugger
  return (
    <div className="NetworkCard">
      <img src=""/>
      <br />
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )
}

NetworkCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default NetworkCard
