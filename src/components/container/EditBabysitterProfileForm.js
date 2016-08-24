import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import editBabysitter from '../../actions/editBabysitter'
import { browserHistory } from 'react-router'

const EditBabysitterProfilePage = class extends Component {

  handleEditFormSubmit(props){
    let currentUser = this.props.currentUser
    this.props.editBabysitter(props, currentUser).then((resp)=>{
      browserHistory.push(`/${resp.payload.type}/${resp.payload.current_user.username}`)
    })
  }

  render(){
     const { fields: {age, location, bio, skills}, handleSubmit } = this.props;
    return(
      <form className='EditBabysitterProfilePage' id='form' onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
        <FormGroup>
          <FormControl type='text' placeholder='AGE' className="form-control" {...age}/>
          <FormControl type='text' placeholder='LOCATION' className="form-control" {...location}/>
          <FormControl type='textarea' placeholder='BIO' className="form-control" {...bio}/>
          <FormControl type='textarea' placeholder='SKILLS' className="form-control" {...skills}/>
          <FormControl id='submit' type='submit' className="btn btn-primary" value='SAVE CHANGES' />
        </FormGroup>
      </form>
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
}, mapStateToProps, { editBabysitter })(EditBabysitterProfilePage);
