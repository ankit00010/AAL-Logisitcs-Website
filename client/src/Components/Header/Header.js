import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // Import NavLink and Link from react-router-dom

import './Header.css'
import LocationIcon from './location.svg'; // Import your location.svg image
import MailIcon from './mail.svg'; // Import your mail.svg image
import TimeIcon from './time.svg'; // Import your time.svg image
import PhoneIcon from './phone.svg'; // Import your phone.svg image


const Header = () => {

  const menuPath = [
    { path: "/", name: "Home" },
    { path: "/aboutus", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact Us" },
    { path: "/book", name: "Book Now" },
  ];

  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  }

  return (
    <div className="custom-navbar">
      <Navbar bg="primary" className='top-navbar'>
        <Container>
          <div className="d-flex flex-md-fill align-items-center justify-content-center text-center">
            {/* Location */}
            <div className="mx-3 d-flex align-items-center mb-2 mb-md-0 d-none d-md-block flex-grow-1">
              <img src={LocationIcon} alt="Location Icon" className="icon" />
              <div className="ms-2">Location: xyz</div>
            </div>

            {/* Email */}
            <div className="mx-3 d-flex align-items-center mb-2 mb-md-0  d-md-block flex-grow-1">
              <img src={MailIcon} alt="Mail Icon" className="icon" />
              <div className="ms-1">aal@gmail.com</div>
            </div>

            {/* Operating Hours */}
            <div className="mx-3 d-flex align-items-center mb-2 mb-md-0 d-none d-md-block flex-grow-1">
              <img src={TimeIcon} alt="Time Icon" className="icon" />
              <div className="ms-2">Mon &ndash; Sat: 9AM &ndash; 6PM</div>
            </div>

            {/* Contact Number */}
            <div className="mx-3 d-flex align-items-center mb-2  d-none d-md-block flex-grow-1">
              <img src={PhoneIcon} alt="Phone Icon" className="icon" />
              <div className="ms-2">Contact: +91 91XXXXXXXX</div>
            </div>
          </div>
        </Container>
      </Navbar>





      <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
            AAL
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav">
              {
                menuPath.map((item, index) => (
                  <Nav.Link as={NavLink} to={item.path} key={index} exact="true" onClick={() => setExpanded(false)}>
                    {item.name}
                  </Nav.Link>
                ))

              }


            </Nav>
            <Nav >
              <NavLink to='/login' className='custom-login-link' onClick={() => setExpanded(false)}>Login</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}

export default Header;
