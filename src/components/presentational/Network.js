import React, { Component } from 'react';
import NetworkThumbnail from './NetworkThumbnail'

const Network = ({props}) => {
  return (
  <div>
  return props.babysitters.map((babysitter) => {
    return <NetworkThumbnail image="http://bioexpedition.com/wp-content/uploads/2013/06/Asian_elephant_anatomy1.png" username="Gina"/>
  })
  </div>
)

}
