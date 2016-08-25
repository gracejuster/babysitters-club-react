import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import createBooking from '../../actions/createBooking'
import retrieveUser from '../../actions/retrieveUser'

const CreateBookingForm = class extends Component {
  handleCreateBookingSubmit(props) {
    let currentUser = this.props.currentUser
    let viewableUser = this.props.viewableUser
    this.props.createBooking(props, currentUser, viewableUser).then(() => {
      this.props.retrieveUser(currentUser)
    }).then(() => {
      browserHistory.push(`/${currentUser.type.toLowerCase()}/${currentUser.currentUser.username}`)
    })
  }

  render(){
    const { fields: {duration, desired_time, desired_date}, handleSubmit } = this.props;
    return(
      <form className='CreateBookingForm' onSubmit={handleSubmit(this.handleCreateBookingSubmit.bind(this))}>
        <FormGroup>
          <FormControl type='text' placeholder='DURATION' className="form-control" {...duration}/>
          <FormControl type='text' placeholder='DESIRED TIME' className="form-control" {...desired_time}/>
          <FormControl type='text' placeholder='DESIRED DATE' className="form-control" {...desired_date}/>
          <FormControl block id='submit' type='submit' className="btn" value='REQUEST BOOKING' />
        </FormGroup>
      </form>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    viewableUser: state.viewableUser
  }
}

export default reduxForm({
  form: 'CreateBookingForm',
  fields: [
    'duration',
    'desired_time',
    'desired_date'
  ],
}, mapStateToProps, { createBooking, retrieveUser })(CreateBookingForm);
