import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
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
          <FormGroup>
          <FormControl type='text' placeholder='NAME' className="form-control" {...name}/>
          <FormControl type='text' placeholder='E-MAIL' className="form-control" {...email}/>
          <FormControl type='text' placeholder='USERNAME' className="form-control" {...username}/>
          <FormControl type='text' placeholder='PASSWORD' className="form-control" {...password}/>
          <ControlLabel className="radioLabel">PARENT</ControlLabel>
          <FormControl type='radio' {...user_type} value='PARENT' checked={user_type.value === 'PARENT'}/>
          <ControlLabel className="radioLabel">BABYSITTER</ControlLabel>
          <FormControl type='radio' {...user_type} value='BABYSITTER' checked={user_type.value === 'BABYSITTER'}/>
          <FormControl id='submit' type='submit' className="btn btn-primary" value="CREATE ACCOUNT"/>
          </FormGroup>
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
