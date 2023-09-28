import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css';
import LoginPage from '../pages/LoginPage';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleLoginModalShow = () => setShowLoginModal(true);
  return (
    <div className="custom-navbar"> {/* Wrap the entire Navbar with a div */}
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand to="/" as={Link}>AAL</Navbar.Brand> {/* Use Link */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link> {/* Use Link */}
              <Nav.Link as={Link} to="/services">Services</Nav.Link> {/* Use Link */}
              <Nav.Link as={Link} to="/book">Book</Nav.Link> {/* Use Link */}
              <Nav.Link as={Link} to="/track">Track</Nav.Link> {/* Use Link */}
              <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link> {/* Use Link */}
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown" >
                <NavDropdown.Item as={Link} to="/action/3.1">Action</NavDropdown.Item> {/* Use Link */}
                <NavDropdown.Item as={Link} to="/action/3.2">Another action</NavDropdown.Item> {/* Use Link */}
                <NavDropdown.Item as={Link} to="/action/3.3">Something</NavDropdown.Item> {/* Use Link */}
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action/3.4">Separated link</NavDropdown.Item> {/* Use Link */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLoginModalShow} className='custom-login-link'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginPage show={showLoginModal} handleClose={handleLoginModalClose} />
    </div>
  );
}

export default Header;
