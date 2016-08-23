import React from 'react'
import { connect } from 'react-redux'

let NavBar = ({type, username}) => {
  return(
    <nav className="navbar navbar-default navbar-static-top">
      <div className='NavBar'>
        <p className="navbar-text">{username}</p>
        <p className ="navbar-text"><a href={`/${type.toLowerCase()}/${username}`} className="navbar-link">Dashboard</a></p>
      </div>
    </nav>
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
