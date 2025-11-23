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
                    <li>
                      <Link
                        href='/products/SS Hinges Premium Welded.pdf'
                        target='_blank'
                      >
                        SS Hinges (Premium / Welded)
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Mortise Locks.pdf' target='_blank'>
                        Mortise Locks
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Door Handles.pdf' target='_blank'>
                        Door Handles
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Aldrop.pdf' target='_blank'>
                        Aldrops
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Tower Bolt.pdf' target='_blank'>
                        Tower Bolts
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Door Stoper.pdf' target='_blank'>
                        Door Stoppers
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Door Chain.pdf' target='_blank'>
                        Door Chain
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/Cabinet handles.pdf' target='_blank'>
                        Cabinet Handles
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='dropdown-column'>
                  <h4>Furniture Fittings</h4>
                  <ul>
                    <li>
                      <Link href='/products/Knobs.pdf' target='_blank'>
                        Knobs
                      </Link>
                    </li>
                  </ul>
                  <div className='divider'>
                    <h4>Hardware Fittings</h4>
                    <ul>
                      <li>
                       <Link href='/products/Sofa Legs.pdf' target='_blank'>
                        Sofa Legs
                       </Link>
                      </li>
                      <li> 
                        <Link href='/products/Caster Wheel.pdf' target='_blank'>
                          Castor Wheels
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='divider'>
                    <h4>Kitchen Accessories</h4>
                    <ul>
                      <li>
                        <Link href='/products/SS Kitchen Basket.pdf' target='_blank'>
                          SS Kitchen Baskets
                        </Link>
                      </li>
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
            <Link href='/products/Overall.pdf' target='_blank'>
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
