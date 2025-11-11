'use client';
import { Plus, PlusCircle } from 'lucide-react';
import {  MapPin, Phone } from 'lucide-react';
import Reviews from '../reviews/Reviews';
import './Contact.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get('product'); // read from URL
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    if (selectedProduct) {
      setProducts([selectedProduct]);
    }
    else {
    
    setProducts(['']);
  }
  }, [selectedProduct]);

   const handleAddProduct = () => {
    setProducts([...products, '']); 
  };

   const handleProductChange = (index: number, value: string) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

    const getAvailableProducts = (currentValue: string) => {
    return allProducts.filter(
      (p) => !products.includes(p) || p === currentValue
    );
  };
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='contact-grid'>
            <div className='contact-grid-items'>
              <p>Contact us</p>
              <h2 className='heading-h2 contact-heading'>
                Premium Fittings for Every Need,<span> Built to Last.</span>
              </h2>
              <p>
                Discover a wide range of high-quality hinges, handles, and
                locks. Durable, functional, and stylish fittings crafted to meet
                global standards.
              </p>
                <hr className="dotted-line" />
           <div className='contact-info'>
           <div className='contact-info-item'>
            <MapPin className='contact-icon' />
            <p>No.39, Ground Floor, Ambedkar Street, Aparna Nagar, Ayappakkam, Chennai - 600077.</p>
          </div>

           <div className='contact-info-item'>
           <Phone className='contact-icon' />
          <p>   +91 98844-11134</p>
           </div>
            </div>
              
            </div>
           

            {/* Form */}
            <div className='contact-grid-items-form'>
              <h4>Get a Quote</h4>
              <form action=''>
                {/* Name */}
                <div className='input-box'>
                  <label htmlFor='name'>
                    Name<span style={{ color: '#FF1F1F' }}>*</span>
                  </label>
                  <input type='text' id='name' name='name' />
                </div>

                {/* Email */}
                <div className='input-box'>
                  <label htmlFor='email'>
                    Email<span style={{ color: '#FF1F1F' }}>*</span>
                  </label>
                  <input type='email' id='email' name='email' />
                </div>

                {/* Phone */}
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
         onChange={(e) => handleProductChange(index, e.target.value)}
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
            </div>
          </div>
        </div>
      </section>
      {/*  <section className='partners'>
        <div className='container'>
          <ul className='partners-list'>
            <li className='partner-item'>LumberLand</li>
            <li className='partner-item'>PowerPro</li>
            <li className='partner-item'>Tool Heaven</li>
            <li className='partner-item'>FurniCraft</li>
            <li className='partner-item'>CutMaster</li>
            <li className='partner-item'>SafetyShield</li>
          </ul>
        </div>
      </section> */}
    
      <Reviews />
    </>
  );
}
