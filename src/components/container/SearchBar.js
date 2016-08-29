import React, { Component } from 'react';
import { FormGroup, FormControl, Row, Col } from 'react-bootstrap'
import { reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import search from '../../actions/searchParents'

class SearchBar extends Component {
  SearchFormSubmit(props){
    let currentUser = this.props.currentUser
    this.props.search(props, currentUser).then(()=>{
      browserHistory.push(`/parents`)
    })
  }

  render() {
    const { fields: { searchValue }, handleSubmit} = this.props
    return (
      <Row>
        <Col xs={0} md={2} />
        <Col xs={12} md={8}>
        <form  onSubmit={handleSubmit(this.SearchFormSubmit.bind(this))}>
          <FormGroup>
            <FormControl type='text' placeholder='SEARCH PARENTS' {...searchValue}/>
            <FormControl id="submit" type='submit' value='SUBMIT' />
          </FormGroup>
        </form>
        </Col>
        <Col xs={0} md={2} />
      </Row>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.currentUser
  }
}

export default reduxForm({
  form: 'search',
  fields: ['searchValue']
}, mapStateToProps, {search})(SearchBar);
