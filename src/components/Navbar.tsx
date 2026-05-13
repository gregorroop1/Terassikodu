import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Terassikodu.ee" className="navbar-logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-only">
          <Link to="/" className="nav-link">Avaleht</Link>
          <Link to="/teenused" className="nav-link">Teenused</Link>
          <Link to="/tehtud-tood" className="nav-link">Tehtud tööd</Link>
          <Link to="/epood" className="nav-link">E-pood</Link>
          <button className="nav-button">PLANEERIMINE</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link">Avaleht</Link>
        <Link to="/teenused" className="mobile-nav-link">Teenused</Link>
        <Link to="/tehtud-tood" className="mobile-nav-link">Tehtud tööd</Link>
        <Link to="/epood" className="mobile-nav-link">E-pood</Link>
        <button className="mobile-nav-button">PLANEERIMINE</button>
      </div>
    </nav>
  );
};

export default Navbar;
