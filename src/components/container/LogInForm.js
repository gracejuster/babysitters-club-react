import React, { Component } from 'react';
import {Link} from 'react-router'
import { reduxForm } from 'redux-form'
import loginUser from '../../actions/loginUser'


const LogInForm = class extends Component {

  pressButton(props){
    debugger
    this.props.loginUser()
  }

  render(){
    const { fields: { email, password }, pressButton} = this.props;
    return(
      <div className='LogInForm'>
        <form onSubmit={this.pressButton.bind(this)}>
          <input type='text' placeholder='email' className="form-control" {...email}/>
          <input type='text' placeholder='password' className="form-control" {...password}/>
          <button type='submit' className="btn btn-primary"> Login </button>
        </form>
        <Link to='/newuser'>Create New Account</Link>
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
