import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

let NavBar = ({type, username}) => {
  return (
    // <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <Navbar >
      <Navbar.Header>
        <Navbar.Brand>
          Babysitters Club
        </Navbar.Brand>
      </Navbar.Header>
      <Nav bsStyle="pills">
      <LinkContainer to={`/${type.toLowerCase()}/${username}`}>
        <NavItem eventKey={1}>Dashboard</NavItem>
      </LinkContainer>
      <LinkContainer to={`/edit/${type.toLowerCase()}/${username}`}>
        <NavItem eventKey={2}>Edit profile</NavItem>
      </LinkContainer>
      <LinkContainer to={"login"}>
        <NavItem eventKey={3}>Log out</NavItem>
      </LinkContainer>
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
