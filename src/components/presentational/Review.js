import React, { Component } from 'react';

const Review = class extends Component {

  render(){
  	return(
	    <div className="Review">
	      <p>{this.props.title}</p>
	      <p>{this.props.description}</p>
	      <p>{this.props.rating}!</p>
	    </div>
	   )
  }
}

export default Review
