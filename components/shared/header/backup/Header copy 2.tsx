'use client';

import './Header.css';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowProducts(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
          {/* Brand */}
          <div className='nav-brand'>
            <Link href='/'>
              <img src='/assets/Logo.png' alt='Logo' />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className='menu-icon' onClick={toggleNav}>
            {navOpen ? <X /> : <Menu />}
          </div>

          {/* Navigation Links */}
          <ul className={`nav-list ${navOpen ? 'active' : ''}`}>
            <li className='nav-item'>
              <Link href='/' className='nav-link' onClick={closeNav}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/about' className='nav-link' onClick={closeNav}>
                About Us
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li
              className='nav-item dropdown'
              ref={dropdownRef}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button
                className='nav-link dropdown-toggle'
                onClick={() => setShowProducts((prev) => !prev)}
              >
                Products
              </button>

              <div className={`dropdown-card ${showProducts ? 'show' : ''}`}>
                <div className='dropdown-column'>
                  <h4>Door Fittings</h4>
                  <ul>
                    <li>SS Hinges (Premium / Welded)</li>
                    <li>Door Handles</li>
                    <li>Door Chain</li>
                    <li>Door Stoppers</li>
                    <li>Aldrops</li>
                    <li>Tower Bolts</li>
                    <li>Mortise Locks</li>
                  </ul>
                </div>
                <div className='dropdown-column'>
                  <h4>Cabinet & Furniture Fittings</h4>
                  <ul>
                    <li>Cabinet Handles</li>
                    <li>Knobs</li>
                    <li>Sofa Legs</li>
                    <li>Castor Wheels</li>
                  </ul>
                  <div className='divider'>
                    <h4>Kitchen Accessories</h4>
                    <ul>
                      <li>SS Kitchen Baskets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className='nav-item'>
              <Link href='/contact' className='nav-link' onClick={closeNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
