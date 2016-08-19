import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
export const fields = [ 'searchValue' ]
import { browserHistory } from 'react-router'
import search from '../../actions/search'

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
          <input type='text' placeholder='SEARCH' {...searchValue}/>
          <input id="submit" type='submit' value='SUBMIT' />
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
