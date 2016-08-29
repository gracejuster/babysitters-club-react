import React, { Component } from 'react'
import { Grid, Panel, Row, Col } from 'react-bootstrap'
import { FormGroup, FormControl } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import editParent from '../../actions/editParent'
import ParentInfoOnEditPage from '../presentational/ParentInfoOnEditPage'
import retrieveUser from '../../actions/retrieveUser'
import { browserHistory } from 'react-router'

const EditParentsProfilePage = class extends Component {
  handleEditFormSubmit(props){
    this.props.editParent(props, this.props.currentUser).then((resp)=>{
         this.props.retrieveUser(this.props.currentUser)
    }
  )}


  render(){
    const { fields: {kid_count, address, specific_needs, extra_requests }, handleSubmit } = this.props;
    return(
      <Grid className="ParentInfo">
      <Row>
      <Col xs={3} md={4} />
      <Col xs={6} md={4}>
      <Panel>

      <form className='EditParentsProfilePage' onSubmit={handleSubmit(this.handleEditFormSubmit.bind(this))}>
        <ParentInfoOnEditPage currentUser={this.props.currentUser}/> 
        <FormGroup>
          <FormControl type='text' placeholder='KID COUNT' className="form-control" {...kid_count}/>
          <FormControl type='text' placeholder='ADDRESS' className="form-control" {...address}/>
          <FormControl type='textarea' placeholder='SPECIFIC NEEDS' className="form-control" {...specific_needs}/>
          <FormControl type='textarea' placeholder='EXTRA REQUESTS' className="form-control" {...extra_requests}/>
          <FormControl id='submit' type='submit' className="btn" value="SAVE CHANGES" />
        </FormGroup>
      </form>

      </Panel>
      </Col>
      <Col xs={3} md={4} />
      </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
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
}, mapStateToProps, { editParent, retrieveUser })(EditParentsProfilePage);
