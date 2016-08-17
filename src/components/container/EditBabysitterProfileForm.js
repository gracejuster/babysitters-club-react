import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import editBabysitter from '../../actions/editBabysitter'

const EditBabysitterProfilePage = class extends Component {

  handleEditFormSubmit(props){
    let currentUser = this.props.currentUser
    this.props.editBabysitter(props, currentUser)
  }

  render(){
     const { fields: {age, location, bio, skills}, handleSubmit } = this.props;
    return(
      <div className='EditBabysitterProfilePage'>
        <form id='form' onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
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
