
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../assets/louth-civic-trust-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-lct-blue text-white">
      <div className="container mx-auto px-4 py-6">
        <a href="#main-content" className="skip-link">Skip to content</a>
        
        <div className="flex flex-col items-center justify-center mb-4">
          <Link to="/" className="no-underline">
            <img 
              src={logo} 
              alt="Louth Civic Trust Logo" 
              className="h-24 md:h-32" 
            />
          </Link>
          <div className="text-center mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white no-underline">
              LOUTH CIVIC TRUST
            </h1>
          </div>
        </div>
        
        <div className="lg:hidden flex justify-end">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 rounded border border-white"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="block text-xl font-semibold">MENU</span>
          </button>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`} id="mobile-menu">
          <Navigation closeMenu={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
