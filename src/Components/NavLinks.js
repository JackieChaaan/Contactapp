import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavLinks() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
      <Container>
        <Link className='navbar-brand' to='/'>Private Contact</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav >
            <Link className='nav-link' to='/Contactapp'>Home</Link>
            <Link className='nav-link' to='/favourite'>Favourite</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )};

export default NavLinks
