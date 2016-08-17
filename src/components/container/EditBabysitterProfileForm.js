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
        <form onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
          <label>Name: </label>
          <input type='text' placeholder='name' className="form-control" {...name}/>
          <label>Email: </label>
          <input type='text' placeholder='email' className="form-control" {...email}/>
          <label>Age: </label>
          <input type='text' placeholder='age' className="form-control" {...age}/>
          <label>Location: </label>
          <input type='text' placeholder='location' className="form-control" {...location}/>
          <label>Bio: </label>
          <input type='textarea' placeholder='bio' className="form-control" {...bio}/>
          <label>Skills: </label>
          <input type='textarea' placeholder='skills' className="form-control" {...skills}/>
          <button type='submit' className="btn btn-primary"> Save Changes </button>
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
