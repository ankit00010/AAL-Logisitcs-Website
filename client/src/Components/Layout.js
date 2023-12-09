import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import '../CSS/index.css';

const Layout = () => {
  const location = useLocation();

  // Scroll to the top when the child route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-wrapper">
      <Header />

      <div className='content-layout'>
        <Outlet /> {/* Render child routes here */}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
