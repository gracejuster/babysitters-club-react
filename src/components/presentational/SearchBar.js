import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
export const fields = [ 'searchValue' ]

class SearchBar extends Component {
  render() {
    console.log(this.props)
    const {
      fields: { searchValue }
      // handleSubmit,
      // resetForm,
      // submitting
      } = this.props
    return(
        <form>
          <input type='text' placeholder='search' {...searchValue}/>
          <input type='submit' value='submit' />
        </form>
    )
  }
}

export default reduxForm({
  form: 'search',
  fields: ['searchValue']
})(SearchBar)
