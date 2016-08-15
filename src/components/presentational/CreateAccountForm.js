import React, { Component } from 'react';

const CreateAccountForm = class extends Component {
  render(){
    return(
      <div className='CreateAccountForm'>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' placeholder='name'/>
          <input type='text' placeholder='email'/>
          <input type='text' placeholder='password'/>
          <label>Parent</label>
          <input type='radio' name='user_type' value='parent'/>
          <label>Babysitter</label>
          <input type='radio' name='user_type' value='babysitter'/>
          <input type='submit' value='log in'/>
        </form>
      </div>
    )
  }
}

export default CreateAccountForm
