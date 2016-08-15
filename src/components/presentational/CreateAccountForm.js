import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import {Link} from 'react-router'
import createUser from '../../actions/createUser'

const CreateAccountForm = class extends Component {

  handleFormSubmit(props) {
    debugger
    this.props.createUser(props)
  }

  render(){
    const { fields: {name, email, username, password, user_type }, handleSubmit } = this.props;
    return(
      <div className='CreateAccountForm'>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input type='text' placeholder='name' className="form-control" {...name}/>
          <input type='text' placeholder='email' className="form-control" {...email}/>
          <input type='text' placeholder='username' className="form-control" {...username}/>
          <input type='text' placeholder='password' className="form-control" {...password}/>
          <label>Parent</label>
          <input type='radio' {...user_type} value='parent' checked={user_type.value === 'parent'}/>
          <label>Babysitter</label>
          <input type='radio' {...user_type} value='babysitter' checked={user_type.value === 'babysitter'}/>
          <button type='submit' className="btn btn-primary"> Create Account </button>
        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'CreateAccountForm',
  fields: [
    'name',
    'email',
    'username',
    'password',
    'user_type'
  ],
}, null, { createUser })(CreateAccountForm);
