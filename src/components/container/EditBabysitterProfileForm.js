import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import editBabysitter from '../../actions/editBabysitter'
import { browserHistory } from 'react-router'
import BabysitterInfoOnEditPage from '../presentational/BabysitterInfoOnEditPage'
import retrieveUser from '../../actions/retrieveUser'

const EditBabysitterProfilePage = class extends Component {

  handleEditFormSubmit(props){

    let currentUser = this.props.currentUser
    this.props.editBabysitter(props, currentUser)

    this.props.retrieveUser(currentUser)
  }

  render(){
     const { fields: {age, location, bio, skills}, handleSubmit } = this.props;
    return(
      <div className="BabysitterInfo">
      <BabysitterInfoOnEditPage currentUser={this.props.currentUser}/>
      <form className='EditBabysitterProfilePage' id='form' onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
        <FormGroup>
          <FormControl type='text' placeholder='AGE' className="form-control" {...age}/>
          <FormControl type='text' placeholder='LOCATION' className="form-control" {...location}/>
          <FormControl type='textarea' placeholder='BIO' className="form-control" {...bio}/>
          <FormControl type='textarea' placeholder='SKILLS' className="form-control" {...skills}/>
          <FormControl id='submit' type='submit' className="btn" value='SAVE CHANGES' />
        </FormGroup>
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
  form: 'EditBabysitterProfilePage',
  fields: [
    'age',
    'location',
    'bio',
    'skills'
  ],
}, mapStateToProps, { editBabysitter, retrieveUser })(EditBabysitterProfilePage);
