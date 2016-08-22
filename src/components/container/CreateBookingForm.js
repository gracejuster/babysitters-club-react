import React, { Component } from 'react';
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
      <div className='CreateBookingForm'>
      <form id='form' onSubmit={handleSubmit(this.handleCreateBookingSubmit.bind(this))}>
        {/* <label>Duration: </label> */}
        <input type='text' placeholder='DURATION' className="form-control" {...duration}/>
        {/* <label>Desired Time: </label> */}
        <input type='text' placeholder='DESIRED TIME' className="form-control" {...desired_time}/>
        <input type='text' placeholder='DESIRED DATE' className="form-control" {...desired_date}/>

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
    'desired_time',
    'desired_date'
  ],
}, mapStateToProps, { createBooking, retrieveUser })(CreateBookingForm);
