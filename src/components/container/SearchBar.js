import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
export const fields = [ 'searchValue' ]
import { browserHistory } from 'react-router'

class SearchBar extends Component {
  SearchFormSubmit(props){
    // this.props.search(props).then((resp)=>{
    //   browserHistory.push(`/${resp.payload.type.toLowerCase()}/${resp.payload.current_user.username}`)
    // })
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

export default reduxForm({
  form: 'search',
  fields: ['searchValue']
})(SearchBar)
