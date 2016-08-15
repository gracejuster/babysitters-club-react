import React, { Component } from 'react';
import {Link} from 'react-router'

const SearchBar = ({}) => {
  return(
    <div className='SearchBar'>
      <form>
        <input type='text' placeholder='search'/>
      </form>
    </div>
  )
}

export default SearchBar
