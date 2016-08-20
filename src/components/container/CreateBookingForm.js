import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import createBooking from '../../actions/createBooking'

const CreateBookingForm = class extends Component {
  handleCreateBookingSubmit(props) {
    let currentUser = this.props.currentUser
    let viewableUser = this.props.viewableUser
    this.props.createBooking(props, currentUser, viewableUser)

  }

  render(){
    const { fields: {duration, desired_time }, handleSubmit } = this.props;
    return(
      <div className='CreateBookingForm'>
      <form id='form' onSubmit={handleSubmit(this.handleCreateBookingSubmit.bind(this))}>
        {/* <label>Duration: </label> */}
        <input type='text' placeholder='DURATION' className="form-control" {...duration}/>
        {/* <label>Desired Time: </label> */}
        <input type='text' placeholder='DESIRED TIME' className="form-control" {...desired_time}/>
        <input id='submit' type='submit' className="btn btn-primary" value='REQUEST BOOKING' />
      </form>
      </div>
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
    'desired_time'
  ],
}, mapStateToProps, { createBooking })(CreateBookingForm);
