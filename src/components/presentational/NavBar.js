import React, { Component } from 'react';
import {Link} from 'react-router'

const NavBar = ({params}) => {
  return(
    <div className='NavBar'>
      <h2>{params.username}</h2>
      <Link to= {`/user/${params.username}`}>Homepage</Link>
      <Link to='/'>Log Out</Link>
    </div>
  )
}

export default NavBar
