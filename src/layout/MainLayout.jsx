import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const MainLayout = () => {
  return (
    <div>
    {/* Navbar */}
    <Navbar/>

    {/* Content */}
    <main className="">
      <Outlet /> 
    </main>

    <Footer/>
  </div>
  );
}

export default MainLayout;
