import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import editParent from '../../actions/editParent'

const EditParentsProfilePage = class extends Component {

  handleEditFormSubmit(props){
    let currentUser = this.props.currentUser
    this.props.editParent(props, currentUser).then((resp)=>{
      debugger
      browserHistory.push(`/${resp.payload.type}/${resp.payload.current_user.username}`)
    })
  }

  render(){
     const { fields: {kid_count, address, specific_needs, extra_requests }, handleSubmit } = this.props;
    return(
      <div className='EditParentsProfilePage'>
        <form id="form" onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
          {/* <label>Kid's Count: </label> */}
          <input type='text' placeholder='KID COUNT' className="form-control" {...kid_count}/>
          {/* <label>Address: </label> */}
          <input type='text' placeholder='ADDRESS' className="form-control" {...address}/>
          {/* <label>Specific Needs: </label> */}
          <input type='textarea' placeholder='SPECIFIC NEEDS' className="form-control" {...specific_needs}/>
          {/* <label>Extra Requests: </label> */}
          <input type='textarea' placeholder='EXTRA REQUESTS' className="form-control" {...extra_requests}/>
          <input id='submit' type='submit' className="btn btn-primary" value="SAVE CHANGES" />
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
