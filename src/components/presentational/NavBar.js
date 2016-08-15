import React, { Component } from 'react';
import {Link} from 'react-router'

const NavBar = ({}) => {
  return(
    <div className='NavBar'>
      <h2>{this.props.userName}</h2>
      <Link to='/profile'>Profile</Link>
      <Link to='/logout'>Log Out</Link>
    </div>
  )
}

export default NavBar
