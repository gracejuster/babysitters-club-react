import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import createUser from '../../actions/createUser'
import { browserHistory } from 'react-router'

const CreateAccountForm = class extends Component {

  handleFormSubmit(props) {
    this.props.createUser(props).then(() => {
      browserHistory.push('/login')
  })
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
            <div className="check" >
              <label className="radioLabel">PARENT</label>
              <input type='radio' {...user_type} value='PARENT' checked={user_type.value === 'PARENT'}/>
              <label className="radioLabel">BABYSITTER</label>
              <input type='radio' {...user_type} value='BABYSITTER' checked={user_type.value === 'BABYSITTER'}/>
            </div>
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
