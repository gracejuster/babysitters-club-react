import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import {Link} from 'react-router'
import createUser from '../../actions/createUser'

const CreateAccountForm = class extends Component {
  render(){
     const { fields: {name, email, password, user_type }, handleSubmit } = this.props;
    return(
      <div className='CreateAccountForm'>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='name' className="form-control" {...name}/>
          <input type='text' placeholder='email' className="form-control" {...email}/>
          <input type='text' placeholder='password' className="form-control" {...password}/>
          <label>Parent</label>
          <input type='radio' value='parent' className="form-control" {...user_type}/>
          <label>Babysitter</label>
          <input type='radio' value='babysitter' className="form-control" {...user_type}/>
          <button type='submit' className="btn btn-primary"> Create Account </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'CreateAccountFormForm',
  fields: [
    'name',
    'email',
    'password',
    'user_type'
  ],
})(CreateAccountForm);
