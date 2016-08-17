import React from 'react'
import {Link} from 'react-router'

const NavBar = ({params}) => {
  return(
    <div className='NavBar'>
      <h6>{params.username}</h6>
      <Link to={`/user/${params.username}`}>Homepage</Link>
      <Link to={`/user/edit/${params.username}`}> Edit Profile </Link>
      <Link to='/'>Log Out</Link>
    </div>
  )
}

export default NavBar
