import React from 'react'
import { Panel, Col } from 'react-bootstrap'

const BabysitterProfileCard = ({image, name, age, location, rating}) => {
  return(
  	<Panel className="ProfileCard card">
      <img className="card-img-top" width={100} height={100} src={image} alt="Babysitter"/>
      <div className="card-block">
        <h4 className="card-title text-center">{name}</h4>
        <p className="card-text text-center">{age}</p>
        <p className="card-text text-center">{location}</p>
        <p className="card-text text-center">{rating}</p>
      </div>
    </Panel>
  )
}

export default BabysitterProfileCard
