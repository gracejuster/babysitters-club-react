import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'

let NavBar = ({type, username}) => {
  return(
    <div className='NavBar'>
      <form id="form" action={`/${type.toLowerCase()}/${username}`}>
        <input id="submit" type="submit" className="btn btn-primary" value="DASHBOARD" />
      </form>
      <form id="form" action={`/edit/${type.toLowerCase()}/${username}`}>
      {/* don't forget to change this according to which user is seen */}
        <input id="submit" type="submit" className="btn btn-primary" value="EDIT PROFILE" />
      </form>
      <form id="form" action='/login'>
        <input id="submit" type="submit" className="btn btn-primary" value="LOG OUT" />
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    type: state.currentUser.type,
    username: state.currentUser.currentUser.username
  }
}

NavBar = connect(mapStateToProps)(NavBar)

export default NavBar
