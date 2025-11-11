'use client';

import React, { useState, useEffect } from 'react';
import './ProductGrid.css';
import '../../product/TrendingProduct.css';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
  {
    product_no: 13,
    name: 'Brass Hinges',
    description:
      'Brass hinges are durable hardware components used to attach doors, cabinets, and windows securely. Made from high-quality brass, they resist corrosion and last long.',
    img: '/products/Brass Hinges.avif',
    link: '/products/Brass Hinges.pdf',
    category: 'hinges',
  },
  {
    product_no: 14,
    name: 'Ganesh Door Handle',
    description:
      'A divine, golden design that blends tradition with modern interiors, this door handle adds timeless elegance, intricate detailing, and a touch of luxury to every entrance.',
    img: '/products/Ganesh door handle.avif',
    link: '/products/Ganesh door handle.pdf',
    category: 'other',
  },
];

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'hinges', label: 'Hinges' },
  { key: 'door-handles', label: 'Door Handle' },
  { key: 'cabinet-handles', label: 'Cabinet Handles' },
  { key: 'mortise-lock', label: 'Mortise Locks' },
  { key: 'other', label: 'Other' },
];

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [shuffledProducts, setShuffledProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(
    products.slice(0, 4)
  );

  // Shuffle only on client mount
  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
    setFilteredProducts(shuffled.slice(0, 4));
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      const shuffled = [...products].sort(() => Math.random() - 0.5);
      setFilteredProducts(shuffled.slice(0, 4));
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <section className='products'>
      <div className='container'>
        <div className='products-container'>
          <div className='products-title'>
            <h2 className='heading-h2'>Best Selling Product</h2>
          </div>

          {/* Category Buttons */}
          <div className='flex items-center flex-wrap gap-2 mb-6'>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`btn-product text-xl ${
                  activeCategory === cat.key ? 'active' : ''
                }`}
                onClick={() => handleCategoryChange(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Animated Product Grid */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.product_no}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className='relative trending-product-grid-item shadow'
                >
                  <div className='image-padding bg-amber-100'>
                    <img
                      src={product.img}
                      alt={product.name}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='product-content'>
                    <h5 className='text-3xl font-semibold product-grid-item-heading'>
                      {product.name}
                    </h5>
                    <p className='text-xl product-description'>
                      {product.description}
                    </p>
                  </div>
                  <div className='product-action'>
                    <div className='product-btn'>
                      <Link href={product.link} target='_blank'>
                        <span className='btn-primary whitespace-nowrap'>
                          Know More
                        </span>
                      </Link>
                      <Link href='/contact'>
                        <button className='btn btn-product'>Contact Us</button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className='products-cta mt-10'>
            <Link href='/contact'>
              <button className='btn large'>Enquire</button>
            </Link>
            <Link href='/products' className='btn-secondary'>
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
