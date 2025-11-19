'use client';

import './Header.css';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const navigate = useRouter();

  const openMenu = () => setNavOpen((prev) => !prev);
  const closeMenu = () => setNavOpen(false);

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

  const handleClick = () => {
    navigate.push('/products');
  };
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

            <li
              className='nav-item dropdown'
              ref={dropdownRef}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <button
                className='nav-link dropdown-toggle cursor-pointer'
                onClick={() => handleClick()}
              >
                Products
              </button>

              <div className={`dropdown-card ${showProducts ? 'show' : ''}`}>
                <div className='dropdown-column'>
                  <h4>Door Fittings</h4>
                  <ul>
                    <li>SS Hinges (Premium / Welded)</li>
                    <li>Mortise Locks</li>
                    <li>Door Handles</li>
                    <li>Aldrops</li>
                    <li>Tower Bolts</li>
                    <li>Door Stoppers</li>
                    <li>Door Chain</li>

                    <li>Cabinet Handles</li>
                  </ul>
                </div>
                <div className='dropdown-column'>
                  <h4>Furniture Fittings</h4>
                  <ul>
                    <li>Knobs</li>
                  </ul>
                  <div className='divider'>
                    <h4>Hardware Fittings</h4>
                    <ul>
                      <li>Sofa Legs</li>
                      <li>Castor Wheels</li>
                    </ul>
                  </div>
                  <div className='divider'>
                    <h4>Kitchen Accessories</h4>
                    <ul>
                      <li>SS Kitchen Baskets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className='nav-item '>
              <Link href='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='nav-cta'>
            <Link href='/'>
              <button className='btn small whitespace'>
                Download Brochures{' '}
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
