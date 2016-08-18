import React, { PropTypes } from 'react';

const NetworkCard = ({name, location}) => {
  //debugger
  return (
    <div className="NetworkCard">
      <img />
      <br />
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )
}

// NetworkCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired
// }

export default NetworkCard
