import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import createUser from '../../actions/createUser'

const CreateAccountForm = class extends Component {

  handleFormSubmit(props) {
    this.props.createUser(props)
  }

  render(){
    const { fields: {name, email, username, password, user_type }, handleSubmit } = this.props;
    return(
      <div className='CreateAccountForm'>
        <form id='form' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input type='text' placeholder='NAME' className="form-control" {...name}/>
          <input type='text' placeholder='E-MAIL' className="form-control" {...email}/>
          <input type='text' placeholder='USERNAME' className="form-control" {...username}/>
          <input type='text' placeholder='PASSWORD' className="form-control" {...password}/>

            <label className="radioLabel">PARENT</label>
            <input type='radio' {...user_type} value='PARENT' checked={user_type.value === 'parent'}/>
            <label className="radioLabel">BABYSITTER</label>
            <input type='radio' {...user_type} value='BABYSITTER' checked={user_type.value === 'babysitter'}/>
          
          <input id='submit' type='submit' className="btn btn-primary" value="CREATE ACCOUNT"/>
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
