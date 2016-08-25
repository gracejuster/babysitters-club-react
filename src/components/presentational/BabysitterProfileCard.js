import React from 'react'
import { Panel, Col } from 'react-bootstrap'
import PigImage from '../../images/PigImage'

const BabysitterProfileCard = ({image, name, age, location, rating}) => {
  return(
  	<Panel className="ProfileCard card">
      <PigImage />
      <div className="card-block">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{age}</p>
        <p className="card-text">{location}</p>
        <p className="card-text">{rating}</p>
      </div>
    </Panel>
  )
}

export default BabysitterProfileCard
