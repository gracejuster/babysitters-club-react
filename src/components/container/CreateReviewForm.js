import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import createReview from '../../actions/createReview'

const CreateReviewForm = class extends Component {

  handleCreateReviewSubmit(props) {
    this.props.createReview(props)
  }

  render(){
    const { fields: {title, description, rating }, handleSubmit } = this.props;
    return(
      <div className='CreateReviewForm'>
      <form id='form' onSubmit={handleSubmit(this.handleCreateReviewSubmit.bind(this))}>
        {/* <label>Title: </label> */}
        <input type='text' placeholder='TITLE' className="form-control" {...title}/>
        {/* <label>Description: </label> */}
        <input type='text' placeholder='DESCRIPTION' className="form-control" {...description}/>
        {/* <label>Rating: </label> */}
        <input type='text' placeholder='RATING' className="form-control" {...rating}/>
        <input id='submit' type='submit' className="btn btn-primary" value="CREATE REVIEW" /> 
      </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'CreateReviewForm',
  fields: [
    'title',
    'description',
    'rating'
  ],
}, null, { createReview })(CreateReviewForm);
