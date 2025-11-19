'use client';
import { PlusCircle, MapPin, Phone } from 'lucide-react';
import Reviews from '../reviews/Reviews';
import './Contact.css';
import { Suspense, useEffect, useState } from 'react';
import ContactContent from './ContactContent';

const allProducts = [
  'SS Hinges Premium Welded',
  'Door Chain',
  'Door Handles',
  'Door Stoppers',
  'Cabinet Handles',
  'Caster Wheel',
  'Aldrop',
  'SS Kitchen Basket',
  'Sofa Legs',
  'Tower Bolt',
  'Mortise Locks',
  'Knobs',
  'Brass Hinges',
  'Ganesh Door Handle',
];

export default function Contact() {
  const [products, setProducts] = useState<string[]>([]);

  // ✅ Get query params client-side safely
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const selectedProduct = params.get('product');
      if (selectedProduct) setProducts([selectedProduct]);
      else setProducts(['']);
    }
  }, []);

  const handleAddProduct = () => {
    setProducts((prev) => [...prev, '']);
  };

  const handleProductChange = (index: number, value: string) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

  const getAvailableProducts = (currentValue: string) =>
    allProducts.filter((p) => !products.includes(p) || p === currentValue);

  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='contact-grid'>
            <ContactContent />

            {/* Form */}
            <div className='contact-grid-items-form'>
              <h4>Get a Quote</h4>
              <Suspense fallback={<div>Loading form...</div>}>
                <form>
                  <div className='input-box'>
                    <label htmlFor='name'>
                      Name<span style={{ color: '#FF1F1F' }}>*</span>
                    </label>
                    <input type='text' id='name' name='name' />
                  </div>

                  <div className='input-box'>
                    <label htmlFor='email'>
                      Email<span style={{ color: '#FF1F1F' }}>*</span>
                    </label>
                    <input type='email' id='email' name='email' />
                  </div>

                  <div className='input-box'>
                    <label htmlFor='phone'>
                      Phone Number<span style={{ color: '#FF1F1F' }}>*</span>
                    </label>
                    <div className='phone-input'>
                      <select name='country' id='country' className='options'>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Australia</option>
                      </select>
                      <input
                        type='phone'
                        id='phone'
                        name='phone'
                        placeholder='+91'
                      />
                    </div>
                  </div>

                  {products.map((prod, index) => (
                    <div className='input-column' key={index}>
                      <div className='input-box'>
                        <label>
                          Product {index + 1}
                          <span style={{ color: '#FF1F1F' }}>*</span>
                        </label>
                        <select
                          value={prod}
                          onChange={(e) =>
                            handleProductChange(index, e.target.value)
                          }
                        >
                          <option value=''>Select a product</option>
                          {getAvailableProducts(prod).map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='input-box'>
                        <label htmlFor='quantity'>
                          Min. Order Quantity (MOQ)
                          <span style={{ color: '#FF1F1F' }}>*</span>
                        </label>
                        <select name='quantity' id='quantity'>
                          <option>10</option>
                          <option>20</option>
                          <option>30</option>
                          <option>40</option>
                          <option>50</option>
                        </select>
                      </div>
                    </div>
                  ))}

                  <div className='new-product' onClick={handleAddProduct}>
                    <PlusCircle className='w-7 h-7 text-blue-700 cursor-pointer' />
                    <span>Add New Product</span>
                  </div>

                  <div className='contact-form-btn'>
                    <button className='btn large' type='submit'>
                      Contact Us
                    </button>
                  </div>
                </form>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
