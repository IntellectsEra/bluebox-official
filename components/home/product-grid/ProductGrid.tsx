'use client';

import React, { useState } from 'react';
import './ProductGrid.css';
import Link from 'next/link';

// Define the type for a single product
interface Product {
  img: string;
  imgClass: string;
  title: string;
  description: string;
}

// Define the type for product data object
interface ProductData {
  [category: string]: Product[];
}

// Product data
const productData: ProductData = {
  'Door knocker': [
    {
      img: '/assets/Product 1.png',
      imgClass: 'img1',
      title: 'Ganesh Golden Door Holder',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 2.png',
      imgClass: 'img2',
      title: 'Heavy-Duty Caster Wheels',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 3.png',
      imgClass: 'img3',
      title: 'Adjustable Door Stoper',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 4.png',
      imgClass: 'img4',
      title: 'Classic Brass Drawer Pull',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
  ],
  Keys: [
    {
      img: '/assets/Product 1.png',
      imgClass: 'img1',
      title: 'Ganesh Golden Door Holder',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 2.png',
      imgClass: 'img2',
      title: 'Heavy-Duty Caster Wheels',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 3.png',
      imgClass: 'img3',
      title: 'Adjustable Door Stoper',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 4.png',
      imgClass: 'img4',
      title: 'Classic Brass Drawer Pull',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
  ],
  Rack: [
    {
      img: '/assets/Product 1.png',
      imgClass: 'img1',
      title: 'Ganesh Golden Door Holder',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 2.png',
      imgClass: 'img2',
      title: 'Heavy-Duty Caster Wheels',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 3.png',
      imgClass: 'img3',
      title: 'Adjustable Door Stoper',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 4.png',
      imgClass: 'img4',
      title: 'Classic Brass Drawer Pull',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
  ],
  Lamp: [
    {
      img: '/assets/Product 1.png',
      imgClass: 'img1',
      title: 'Ganesh Golden Door Holder',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 2.png',
      imgClass: 'img2',
      title: 'Heavy-Duty Caster Wheels',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 3.png',
      imgClass: 'img3',
      title: 'Adjustable Door Stoper',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
    {
      img: '/assets/Product 4.png',
      imgClass: 'img4',
      title: 'Classic Brass Drawer Pull',
      description:
        'A divine, golden design that blends tradition with modern interiors.',
    },
  ],
};

// Product categories
const productCategories: string[] = ['Door knocker', 'Keys', 'Rack', 'Lamp'];

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Door knocker');

  return (
    <section className='products'>
      <div className='container'>
        <div className='products-container'>
          <div className='products-title'>
            <h2 className='heading-h2'>Best Selling Product</h2>
          </div>

          <div className='w-full max-w-250'>
            <ul className='product-list'>
              {productCategories.map((category, index) => (
                <li
                  key={index}
                  className={`product-item ${
                    activeCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className='product-grid'>
            {productData[activeCategory].map((product, index) => (
              <div key={index} className='product-grid-item'>
                <img src={product.img} alt='' className={product.imgClass} />
                <h5 className='heading-h5 product-grid-item-heading'>
                  {product.title}
                </h5>
                <p className='product-p'>{product.description}</p>
                <span className='underline'></span>
                <div className='product-btn'>
                  <a className='btn-primary'>Know More</a>
                  <Link href='/contact'>
                    <button className='btn btn-product'>Contact Us</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='products-cta'>
            <Link href='/contact'>
              <button className='btn large'>Contact Us</button>
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
