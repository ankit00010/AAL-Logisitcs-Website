import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // Import NavLink and Link from react-router-dom
import '../index.css';

const Header = (props) => {
  const handleLoginModalShow = props.onLoginClick;
  const menuPath = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/contact-us", name: "Contact Us" },
    { path: "/book", name: "Book Now" },
  ];


  return (
    <div className="custom-navbar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand to="/">AAL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto custom-nav">

              {
                menuPath.map((item, index) => (
                  <Nav.Link as={NavLink} to={item.path} key={index}>{item.name}</Nav.Link>
                ))

              }
            </Nav>
            <Nav className="custom-auto">
              <NavLink onClick={handleLoginModalShow} className='custom-login-link'>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}

export default Header;
