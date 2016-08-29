import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { FormGroup, FormControl, ControlLabel, Radio } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import createUser from '../../actions/createUser'

const CreateAccountForm = class extends Component {
  handleFormSubmit(props) {
    this.props.createUser(props).then(() => {
      browserHistory.push('/login')
    })
  }

  render(){
    const { fields: {name, email, username, password, user_type }, handleSubmit } = this.props;
    return (
      <div className='CreateAccountForm'>
        <form id='form' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <FormGroup>
          <FormControl type='text' placeholder='NAME' className="form-control" {...name}/>
          <FormControl type='text' placeholder='E-MAIL' className="form-control" {...email}/>
          <FormControl type='text' placeholder='USERNAME' className="form-control" {...username}/>
          <FormControl type='text' placeholder='PASSWORD' className="form-control" {...password}/>
          <ControlLabel className="radioLabel">PARENT</ControlLabel>
          <Radio type='radio' {...user_type} value='PARENT' checked={user_type.value === 'PARENT'}/> <br/>
          <ControlLabel className="radioLabel">BABYSITTER</ControlLabel>
          <Radio type='radio' {...user_type} value='BABYSITTER' checked={user_type.value === 'BABYSITTER'}/> <br/>
          <FormControl id='submit' type='submit' className="btn" value="CREATE ACCOUNT"/>
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
