import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-navy-800 font-bold' : 'text-gray-600 hover:text-navy-600';
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-navy-600 hover:text-navy-700 transition-colors"
          >
            HEMANT
          </Link>
          
          <nav className="flex space-x-8 font-semibold">
            <Link to="/" className={`${isActive('/')} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors`}>
              About
            </Link>
            <Link to="/projects" className={`${isActive('/projects')} transition-colors`}>
              Projects
            </Link>
            <Link to="/resume" className={`${isActive('/resume')} transition-colors`}>
              Resume
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;