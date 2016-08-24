import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap'
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
    return(
        <form id='form' onSubmit={handleSubmit(this.SearchFormSubmit.bind(this))}>
          <FormGroup>
            <FormControl type='text' placeholder='SEARCH' {...searchValue}/>
            <FormControl id="submit" type='submit' value='SUBMIT' />
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
  form: 'search',
  fields: ['searchValue']
}, mapStateToProps, {search})(SearchBar);
