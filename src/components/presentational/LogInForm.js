import React, { Component } from 'react';
import {Link} from 'react-router'


const LogInForm = class extends Component {
  render(){
    return(
      <div className='LogInForm'>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' placeholder='email'/>
          <input type='text' placeholder='password'/>
          <input type='submit' value='log in'/>
        </form>
        <Link to='/newuser'>Create New Account</Link>
      </div>
    )
  }
}

export default LogInForm
