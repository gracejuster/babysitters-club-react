import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import createBooking from '../../actions/createBooking'

const CreateBookingForm = class extends Component {

  handleCreateBookingSubmit(props) {
    this.props.createBooking(props)
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


export default reduxForm({
  form: 'CreateBookingForm',
  fields: [
    'duration',
    'desired_time'
  ],
}, null, { createBooking })(CreateBookingForm);
