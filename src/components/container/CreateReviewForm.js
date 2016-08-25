import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import createReview from '../../actions/createReview'
import retrieveUser from '../../actions/retrieveUser'
import { browserHistory } from 'react-router'

const CreateReviewForm = class extends Component {

  handleCreateReviewSubmit(props) {
    let currentUser = this.props.currentUser
    let viewableUser = this.props.viewableUser
    this.props.createReview(props, currentUser, viewableUser).then(() => {
      this.props.retrieveUser(currentUser)
    }).then(() => {
      browserHistory.push(`/${currentUser.type.toLowerCase()}/${currentUser.currentUser.username}`)
    })
  }

  render(){
    const { fields: {title, description, rating }, handleSubmit } = this.props;
    return(
      <form className='CreateReviewForm' onSubmit={handleSubmit(this.handleCreateReviewSubmit.bind(this))}>
        <FormGroup>
          <FormControl type='text' placeholder='TITLE' className="form-control" {...title}/>
          <FormControl type='text' placeholder='DESCRIPTION' className="form-control" {...description}/>
          <FormControl type='text' placeholder='RATING' className="form-control" {...rating}/>
          <FormControl id='submit' type='submit' className="btn" value="CREATE REVIEW" />
        </FormGroup>
      </form>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    viewableUser: state.viewableUser
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
