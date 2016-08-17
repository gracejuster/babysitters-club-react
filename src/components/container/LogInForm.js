import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import loginUser from '../../actions/loginUser'


const LogInForm = class extends Component {
  pressButton(props){
    event.preventDefault(props)
    this.props.loginUser(props)
  }
  render(){
    const { fields: { email, password }, handleSubmit} = this.props;
    return(
      <div className='LogInForm'>
      <header>WELCOME BACK</header>
        <form id="form" onSubmit={handleSubmit(this.pressButton.bind(this))}>
          <input id="name" type='text' placeholder='E-MAIL' className="form-control" {...email}/>
          <input id="email" type='text' placeholder='PASSWORD' className="form-control" {...password}/>
          <input id="submit" type='submit' className="btn btn-primary" value="GO!" />
        </form>
        <form id="form" action="/newuser">
          <input id="submit" type="submit" className="btn btn-primary" value="Create New Account" />
        </form>
        {/* <Link to='/newuser'>Create New Account</Link> */}
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
