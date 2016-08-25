import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import editParent from '../../actions/editParent'
import { browserHistory } from 'react-router'

const EditParentsProfilePage = class extends Component {
  handleEditFormSubmit(props){
    let currentUser = this.props.currentUser
    this.props.editParent(props, currentUser).then((resp)=>{
      browserHistory.push(`/${resp.payload.type}/${resp.payload.current_user.username}`)
    })
  }

  render(){
    const { fields: {kid_count, address, specific_needs, extra_requests }, handleSubmit } = this.props;
    return(
      <form className='EditParentsProfilePage' id="form" onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
        <FormGroup>
          <FormControl type='text' placeholder='KID COUNT' className="form-control" {...kid_count}/>
          <FormControl type='text' placeholder='ADDRESS' className="form-control" {...address}/>
          <FormControl type='textarea' placeholder='SPECIFIC NEEDS' className="form-control" {...specific_needs}/>
          <FormControl type='textarea' placeholder='EXTRA REQUESTS' className="form-control" {...extra_requests}/>
          <FormControl id='submit' type='submit' className="btn" value="SAVE CHANGES" />
        </FormGroup>
      </form>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  }
}

export default reduxForm({
  form: 'EditParentsProfilePage',
  fields: [
    'kid_count',
    'address',
    'specific_needs',
    'extra_requests'
  ],
}, mapStateToProps, { editParent })(EditParentsProfilePage);
