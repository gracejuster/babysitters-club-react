import React, { Component } from 'react';
import { Media, Thumbnail } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePicture'

const Review = class extends Component {

  render(){
  	return(
	    <div className="Review">
        <Media>
          <Media.Left>
            <ProfilePicture />
          </Media.Left>
          <Media.Body>
    	      <Media.Heading>{this.props.title}</Media.Heading>
    	      <p>{this.props.description}</p>
    	      <p>{this.props.rating}!</p>
          </Media.Body>
        </Media>
	    </div>
	   )
  }
}

export default Review
