import React, { PropTypes } from 'react';

const NetworkCard = ({name, location, onClick, currentUser, user_id}) => {
debugger
  return (
    <div className="NetworkCard">
      <img src=""/>
      <br />
      <p>{name}</p>
      <p>{location}</p>
      <button onClick={onClick(user_id, currentUser)}>Get Full Profile</button>
    </div>
  )
}

NetworkCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default NetworkCard
