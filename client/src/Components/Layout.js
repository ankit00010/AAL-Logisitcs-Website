import React, { useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from './Footer';
import '../CSS/index.css'

import { Outlet } from 'react-router-dom';

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

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
