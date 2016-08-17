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

          <div class="radioContainer">
            <ul>
            <li>
              <input type="radio" {...user_type} id="one" value='PARENT' checked={user_type.value === 'parent'}/>
              <label for="one">PARENT</label>
              <div className="check"></div>
            </li>
            <li>
              <input type='radio' {...user_type} id="two" value='BABYSITTER' checked={user_type.value === 'babysitter'}/>
              <label for="two">BABYSITTER</label>
              <div className="check"><div className="inside"></div></div>
            </li>
          </ul>
          </div>
            {/* <label className="radioLabel">PARENT</label>
            <input type='radio' {...user_type} value='PARENT' checked={user_type.value === 'parent'}/>
            <div className="check"></div>
            <label className="radioLabel">BABYSITTER</label>
            <input type='radio' {...user_type} value='BABYSITTER' checked={user_type.value === 'babysitter'}/> */}


            
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
