import React, { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import LoginModal from '../pages/LoginPage'; // Import your LoginModal component
import '../index.css'
const Layout = ({ children }) => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  return (
    <>
      <Header onLoginClick={handleLoginModalShow} />
      <div className='content-layout'>
        {children}
      </div>
      <Footer />
      <LoginModal show={showLoginModal} handleClose={handleLoginModalClose} />

    </>
  );
};

export default Layout;
