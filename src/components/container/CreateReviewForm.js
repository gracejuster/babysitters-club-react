import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import createReview from '../../actions/createReview'
import retrieveUser from '../../actions/retrieveUser'
import { browserHistory } from 'react-router'

const CreateReviewForm = class extends Component {

  handleCreateReviewSubmit(props) {
    let currentUser = this.props.currentUser
    this.props.createReview(props, currentUser).then(() => {
      this.props.retrieveUser(currentUser)
    }).then(() => {
      browserHistory.push(`/${currentUser.type.toLowerCase()}/${currentUser.currentUser.username}`)
    })
  }

  render(){
    const { fields: {title, description, rating }, handleSubmit } = this.props;
    return(
      <div className='CreateReviewForm'>
      <form id='form' onSubmit={handleSubmit(this.handleCreateReviewSubmit.bind(this))}>
        <input type='text' placeholder='TITLE' className="form-control" {...title}/>
        <input type='text' placeholder='DESCRIPTION' className="form-control" {...description}/>
        <input type='text' placeholder='RATING' className="form-control" {...rating}/>
        <input id='submit' type='submit' className="btn btn-primary" value="CREATE REVIEW" />
      </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  }
}

export default reduxForm({
  form: 'CreateReviewForm',
  fields: [
    'title',
    'description',
    'rating'
  ],
}, mapStateToProps, { createReview, retrieveUser })(CreateReviewForm);
