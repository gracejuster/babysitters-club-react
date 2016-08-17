import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import editBabysitter from '../../actions/editBabysitter'

const EditBabysitterProfilePage = class extends Component {

  handleEditFormSubmit(props){
    this.props.editBabysitter(props)
  }

  render(){
     const { fields: {name, email, age, location, bio, skills}, handleSubmit } = this.props;
    return(
      <div className='EditBabysitterProfilePage'>
        <form id='form' onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
          {/* <label>Name: </label> */}
          <input type='text' placeholder='NAME' className="form-control" {...name}/>
          {/* <label>Email: </label> */}
          <input type='text' placeholder='E-MAIL' className="form-control" {...email}/>
          {/* <label>Age: </label> */}
          <input type='text' placeholder='AGE' className="form-control" {...age}/>
          {/* <label>Location: </label> */}
          <input type='text' placeholder='LOCATION' className="form-control" {...location}/>
          {/* <label>Bio: </label> */}
          <input type='textarea' placeholder='BIO' className="form-control" {...bio}/>
          {/* <label>Skills: </label> */}
          <input type='textarea' placeholder='SKILLS' className="form-control" {...skills}/>
          <input id='submit' type='submit' className="btn btn-primary" value='SAVE CHANGES' />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'EditBabysitterProfilePage',
  fields: [
    'name',
    'email',
    'age',
    'location',
    'bio',
    'skills'
  ],
}, null, { editBabysitter })(EditBabysitterProfilePage);
