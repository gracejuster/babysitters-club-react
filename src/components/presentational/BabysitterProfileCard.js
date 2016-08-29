import React from 'react'
import { Panel, Col } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'

const BabysitterProfileCard = ({image, name, age, location, rating}) => {
  return (
  	<Panel className="ProfileCard card">
      <ProfilePicture className="card-img-top center-block"/>
      <div className="card-block">
        <h4 className="card-title text-center">{name}</h4>
        <p className="card-text text-center">Age: {age}</p>
        <p className="card-text text-center">Location: {location}</p>
        <p className="card-text text-center">Rating: {rating}</p>
      </div>
    </Panel>
  )
}

export default BabysitterProfileCard
