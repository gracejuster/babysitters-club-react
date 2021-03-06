import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import loginUser from '../../actions/loginUser'
import { browserHistory } from 'react-router'

const LogInForm = class extends Component {
  pressButton(props){
    this.props.loginUser(props).then((resp)=>{
      browserHistory.push(`/${resp.payload.type.toLowerCase()}/${resp.payload.current_user.username}`)
    })
  }

  render(){
    const { fields: { email, password }, handleSubmit} = this.props;
    return (
      <div className='LogInForm'>
        <header>WELCOME</header>
        <form id="form" onSubmit={handleSubmit(this.pressButton.bind(this))}>
          <FormGroup>
            <FormControl id="name" type='text' placeholder='E-MAIL' className="form-control" {...email}/>
            <FormControl id="email" type='password' placeholder='PASSWORD' className="form-control" {...password}/>
            <FormControl id="submit" type='submit' className="btn" value="GO!" />
          </FormGroup>
        </form>
        <form id="form" action="/newuser">
          <FormGroup>
            <FormControl id="submit" type="submit" className="btn" value="Create New Account" />
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'LogInForm',
  fields: [
    'email',
    'password',
  ],
}, null, { loginUser })(LogInForm);
