import React from 'react'
import {Link} from 'react-router'

const NavBar = ({params}) => {
  debugger
  return(
    <div className='NavBar'>


      <form id="form" action={`/${params.type}/${params.username}`}>
        <input id="submit" type="submit" className="btn btn-primary" value="DASHBOARD" />
      </form>
      <form id="form" action={`/edit/${params.type}/${params.username}`}>
      {/* don't forget to change this according to which user is seen */}
        <input id="submit" type="submit" className="btn btn-primary" value="EDIT PROFILE" />
      </form>
      <form id="form" action='/login'>
        <input id="submit" type="submit" className="btn btn-primary" value="LOG OUT" />
      </form>

    </div>
  )
}

export default NavBar
