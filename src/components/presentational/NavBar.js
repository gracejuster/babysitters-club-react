import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router'

let NavBar = ({type, username}) => {
  return(
    // <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          Babysitters Club
        </Navbar.Brand>
      </Navbar.Header>
      <Nav bsStyle="pills">
          <NavItem eventKey={1} href={`/${type.toLowerCase()}/${username}`}>Dashboard</NavItem>
          <NavItem eventKey={2} href={`/edit/${type.toLowerCase()}/${username}`}>Edit profile</NavItem>
          <NavItem eventKey={3} href="login">Log out</NavItem>
      </Nav>
    </Navbar>
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
