import React from 'react'
import {Link} from 'react-router'

const NavBar = ({params}) => {
  return(
    <div className='NavBar'>


      <form id="form" action={`/user/${params.username}`}>
        <input id="submit" type="submit" className="btn btn-primary" value="HOMEPAGE" />
      </form>
      <form id="form" action={`/user/edit/parent/${params.username}`}>
      {/* don't forget to change this according to which user is seen */}
        <input id="submit" type="submit" className="btn btn-primary" value="EDIT PROFILE" />
      </form>
      <form id="form" action='/'>
        <input id="submit" type="submit" className="btn btn-primary" value="LOG OUT" />
      </form>

      {/* <h6>{params.username}</h6>
      <Link to={`/user/${params.username}`}>Homepage</Link>
      <Link to={`/user/edit/${params.username}`}> Edit Profile </Link>
      <Link to='/'>Log Out</Link> */}

    </div>
  )
}

export default NavBar
