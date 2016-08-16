import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import {Link} from 'react-router'
import editUser from '../../actions/editUser'

const EditParentsProfilePage = class extends Component {

  onSubmit(props){
    this.props.editUser()
  }

  render(){
     const { fields: {name, email, kid_count, address, specific_needs, extra_requests }, onSubmit } = this.props;
    return(
      <div className='EditParentsProfilePage'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Name: </label>
          <input type='text' placeholder='name' className="form-control" {...name}/>
          <label>Email: </label>
          <input type='text' placeholder='email' className="form-control" {...email}/>
          <label>Kid's Count: </label>
          <input type='text' placeholder='kid_name' className="form-control" {...kid_count}/>
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
  form: 'EditParentsProfilePage',
  fields: [
    'name',
    'email',
    'kid_count',
    'address',
    'specific_needs',
    'extra_requests'
  ],
}, null, { editUser })(EditParentsProfilePage);
