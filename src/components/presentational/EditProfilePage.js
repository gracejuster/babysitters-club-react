import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import {Link} from 'react-router'
import editUser from '../../actions/editUser'

const EditProfilePage = class extends Component {

  onSubmit(props){
    debugger
    this.props.editUser()
  }

  render(){
     const { fields: {name, email, kid_name, kid_age, address, specific_needs, extra_requests }, onSubmit } = this.props;
    return(
      <div className='EditProfilePage'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Name: </label>
          <input type='text' placeholder='name' className="form-control" {...name}/>
          <label>Email: </label>
          <input type='text' placeholder='email' className="form-control" {...email}/>
          <label>Kid's Information: </label>
          <input type='text' placeholder='kid_name' className="form-control" {...kid_name}/>
          <input type='text' placeholder='kid_age' className="form-control" {...kid_age}/>
          <label>Address: </label>
          <input type='text' placeholder='address' className="form-control" {...address}/>
          <label>Specific Needs: </label>
          <input type='textarea' placeholder='specific_needs' className="form-control" {...specific_needs}/>
          <label>Extra Requests: </label>
          <input type='textarea' placeholder='extra_requests' className="form-control" {...extra_requests}/>
          <button type='submit' className="btn btn-primary"> Save Changes </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'EditProfilePage',
  fields: [
    'name',
    'email',
    'password',
    'user_type'
  ],
}, null, { editUser })(EditProfilePage);
