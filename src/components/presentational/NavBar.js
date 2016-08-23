import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap';

let NavBar = ({type, username}) => {
  return(
    // <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <Nav bsStyle="pills">
      <NavItem eventKey={1} href={`/${type.toLowerCase()}/${username}`}>Dashboard</NavItem>
      <NavItem eventKey={2} href={`/edit/${type.toLowerCase()}/${username}`}>Edit profile</NavItem>
      <NavItem eventKey={3} href="login">Log out</NavItem>
    </Nav>
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
