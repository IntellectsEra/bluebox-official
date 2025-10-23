'use client';

import './Header.css';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const openMenu = () => setNavOpen(true);
  const closeMenu = () => setNavOpen(false);

  return (
    <header>
      <div className='container'>
        <nav>
          <div className='nav-brand'>
            <Link href='/'>
              <img src={'/assets/Logo.png'} alt='' />
            </Link>
          </div>
          <div className='menu-icons open' onClick={openMenu}>
            <Menu />
          </div>
          <ul className={`nav-list ${navOpen ? 'active' : ''}`}>
            <div className='menu-icons close' onClick={closeMenu}>
              <X />
            </div>
            <li className='nav-item '>
              <Link href='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item '>
              <Link href='/about' className='nav-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item '>
              <Link href='/products' className='nav-link '>
                Products
              </Link>
            </li>
          </ul>
          <div className='nav-cta'>
            <Link href='/contact'>
              <button className='btn small whitespace'>Contact Us</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
