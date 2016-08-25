import React, { Component } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import editParent from '../../actions/editParent'
import EditParentProfileContainer from './EditParentProfileContainer'
import { browserHistory } from 'react-router'

const EditParentsProfilePage = class extends Component {
  handleEditFormSubmit(props){
    let currentUser = this.props.currentUser
    this.props.editParent(props, currentUser).then((resp)=>{
      let type = resp.payload.data.type.slice(0, -1)
      let username = resp.payload.data.attributes.username
      browserHistory.push(`/${type}/${username}`)
    })
  }

  render(){
    const { fields: {kid_count, address, specific_needs, extra_requests }, handleSubmit } = this.props;
    return(
      <div className="editParent">
      <EditParentProfileContainer />
      <form className='EditParentsProfilePage' id="form" onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
        <FormGroup>
          <FormControl type='text' placeholder='KID COUNT' className="form-control" {...kid_count}/>
          <FormControl type='text' placeholder='ADDRESS' className="form-control" {...address}/>
          <FormControl type='textarea' placeholder='SPECIFIC NEEDS' className="form-control" {...specific_needs}/>
          <FormControl type='textarea' placeholder='EXTRA REQUESTS' className="form-control" {...extra_requests}/>
          <FormControl id='submit' type='submit' className="btn btn-primary" value="SAVE CHANGES" />
        </FormGroup>
      </form>
      </div>
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
