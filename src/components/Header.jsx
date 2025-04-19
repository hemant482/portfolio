import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-navy-800 font-bold' : 'text-gray-600 hover:text-navy-600';
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md overflow-hidden"
        >
          <div className="flex flex-col items-center space-y-4 py-4 font-semibold">
            <Link to="/" className={`${isActive('/')} transition-colors`} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors`} onClick={toggleMenu}>
              About
            </Link>
            <Link to="/projects" className={`${isActive('/projects')} transition-colors`} onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/resume" className={`${isActive('/resume')} transition-colors`} onClick={toggleMenu}>
              Resume
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`} onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  return (
    <header className={`bg-white shadow-sm fixed w-full top-0 z-50 ${isMenuOpen ? 'pb-48' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-navy-600 hover:text-navy-700 transition-colors"
          >
            {`< HEMANT />`}
          </Link>
          
          <div className="flex items-center">
            <button
              className="text-2xl text-navy-600 sm:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className="hidden sm:flex space-x-8 font-semibold">
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
          {renderMobileMenu()}
        </div>
      </div>
    </header>
  );
};

export default Header;
