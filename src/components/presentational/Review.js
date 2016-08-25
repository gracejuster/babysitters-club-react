import React, { Component } from 'react';
import { Media } from 'react-bootstrap'
import ReviewThumbnail from '../../images/ReviewThumbnail'

const Review = class extends Component {

  render(){
  	return(
      <Media className="Review">
        <Media.Left>
          <ReviewThumbnail />
        </Media.Left>
        <Media.Body>
  	      <Media.Heading>{this.props.title}</Media.Heading>
  	      <p>{this.props.description}</p>
  	      <p>{this.props.rating}!</p>
        </Media.Body>
      </Media>
	   )
  }
}

export default Review
