import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
        <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header