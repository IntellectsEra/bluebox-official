'use client';

import { useState } from 'react';
import './TrendingProduct.css';
import Reviews from '../reviews/Reviews';
import Link from 'next/link';

const products = [
  {
    product_no: 1,

    name: 'SS Hinges Premium Welded',
    description:
      'SS Hinges Premium Welded are strong stainless steel hinges designed for heavy-duty use, offering durability, smooth movement, and long-lasting rust resistance.',
    img: '/products/SS Hinges Premium Welded.avif',
    link: '/products/SS Hinges Premium Welded.pdf',
    category: 'hinges',
  },
  {
    product_no: 2,
    name: 'Door Chain',
    description:
      'Made from premium stainless steel, this door chain offers strength and rust-free security with smooth operation and functionality for everyday use.',
    img: '/products/Door Chain.avif',
    link: '/products/Door Chain.pdf',
    category: 'other',
  },
  {
    product_no: 3,
    name: 'Door Handles',
    description:
      'Door handles are essential hardware that provide a secure and convenient way to open and close doors. Available in various styles, door handles combine function and style.',
    img: '/products/Door Handles.avif',
    link: '/products/Door Handles.pdf',
    category: 'door-handles',
  },
  {
    product_no: 4,
    name: 'Door Stoppers',
    description:
      'Door stoppers are practical accessories designed to prevent doors from slamming or damaging walls.',
    img: '/products/Door Stoper.avif',
    link: '/products/Door Stoper.pdf',
    category: 'other',
  },
  {
    product_no: 5,
    name: 'Cabinet Handles',
    description:
      'Cabinet handles are designed for style and convenience, offering a comfortable grip for everyday use. They add a modern touch to any furniture or kitchen design.',
    img: '/products/Cabinet handles.avif',
    link: '/products/Cabinet handles.pdf',
    category: 'cabinet-handles',
  },
  {
    product_no: 6,
    name: 'Caster Wheel',
    description:
      'A caster wheel is a rotating wheel fitted to furniture or equipment, allowing easy movement and smooth mobility in any direction.',
    img: '/products/Caster Wheel.avif',
    link: '/products/Caster Wheel.pdf',
    category: 'other',
  },
  {
    product_no: 7,
    name: 'Aldrop',
    description:
      'An SS Aldrop is a durable stainless-steel door-fastening bar offering rust resistance and a sleek finish. Ideal for securing both indoor and outdoor doors and gates.',
    img: '/products/Aldrop.avif',
    link: '/products/Aldrop.pdf',
    category: 'other',
  },
  {
    product_no: 8,
    name: 'SS Kitchen Basket',
    description:
      'SS Kitchen Baskets are sturdy and corrosion-resistant storage solutions for kitchens. Made from high-quality stainless steel, they ensure durability and long-lasting use.',
    img: '/products/SS Kitchen Basket.avif',
    link: '/products/SS Kitchen Basket.pdf',
    category: 'other',
  },
  {
    product_no: 9,
    name: 'Sofa Legs',
    description:
      'Sofa legs are sturdy supports that elevate and stabilize sofas while enhancing their overall look. Available in various styles, sofa legs enhance any décor.',
    img: '/products/Sofa Legs.avif',
    link: '/products/Sofa Legs.pdf',
    category: 'other',
  },
  {
    product_no: 10,
    name: 'Tower Bolt',
    description:
      'A tower bolt made from brass or aluminium is a simple sliding bolt used to secure doors and windows. It features a rod that slides into a socket to lock the door from one side.',
    img: '/products/Tower Bolt.avif',
    link: '/products/Tower Bolt.pdf',
    category: 'other',
  },
  {
    product_no: 11,
    name: 'Mortise Locks',
    description:
      'Mortise locks are high-security locking systems commonly used for main doors and commercial spaces. They feature a durable mechanism inside the door for a sleek look.',
    img: '/products/Mortise Locks.avif',
    link: '/products/Mortise Locks.pdf',
    category: 'mortise-lock',
  },
  {
    product_no: 12,
    name: 'Knobs',
    description:
      'Knobs are essential hardware pieces used for doors, cabinets, and drawers, providing a comfortable grip. Available in various styles and finishes, knobs add both functionality and aesthetic appeal to any furniture or door.',
    img: '/products/Knobs.avif',
    link: '/products/Knobs.pdf',
    category: 'other',
  },
  // {
  //   product_no: 13,
  //   name: 'Brass Hinges',
  //   description:
  //     'Brass hinges are durable hardware components used to attach doors, cabinets, and windows securely. Made from high-quality brass, they resist corrosion and last long.',
  //   img: '/products/Brass Hinges.avif',
  //   link: '/products/Brass Hinges.pdf',
  //   category: 'hinges',
  // },
  // {
  //   product_no: 14,
  //   name: 'Ganesh Door Handle',
  //   description:
  //     'A divine, golden design that blends tradition with modern interiors, this door handle adds timeless elegance, intricate detailing, and a touch of luxury to every entrance.',
  //   img: '/products/Ganesh door handle.avif',
  //   link: '/products/Ganesh door handle.pdf',
  //   category: 'other',
  // },
];

const TrendingProducts = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleCardClick = (product: any) => {
    setActive(product.product_no);

    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className='trending-product'>
        <div className='container'>
          <div className='trending-product-flex'>
            <div className='trending-product-title'>
              <p>What’s New</p>
              <h1 className='heading-h1'>Trending Products</h1>
              <p>Where Design Meets Strength</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {products.map((product) => (
                <div
                  key={product.product_no}
                  onClick={() => handleCardClick(product)}
                  className={`relative trending-product-grid-item shadow ${
                    active === product.product_no ? 'product-active' : ''
                  }`}
                >
                  <div className='image-padding bg-amber-100'>
                    <img
                      src={product.img}
                      alt=''
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='product-content'>
                    <h5 className='text-3xl font-semibold product-grid-item-heading '>
                      {product.name}
                    </h5>
                    <p className='text-xl product-description'>
                      {product.description}
                    </p>
                  </div>
                  <div className='product-action'>
                    <div className='product-btn'>
                      <Link
                        href={product.link}
                        target='_blank'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className='btn-primary whitespace-nowrap'>
                          Know More
                        </span>
                      </Link>

                      <Link
                        href={`/contact?product=${encodeURIComponent(
                          product.name
                        )}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type='button'
                          className='btn btn-product'
                          onClick={(e) => e.stopPropagation()}
                        >
                          Enquire
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Reviews />
    </>
  );
};

export default TrendingProducts;
