import { Plus, PlusCircle } from 'lucide-react';
import { MapPin, Phone } from 'lucide-react';
import Reviews from '../reviews/Reviews';
import './Contact.css';

export default function Contact() {
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

                <div className='input-column'>
                  <div className='input-box'>
                    <label htmlFor='product'>
                      Product<span style={{ color: '#FF1F1F' }}>*</span>
                    </label>
                    <select name='product' id='product'>
                      <option></option>
                      <option>Product 1</option>
                      <option>Product 2</option>
                      <option>Product 3</option>
                      <option>Product 4</option>
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

                <div className='new-product'>
                  <PlusCircle className='w-7 h-7 text-blue-700' />
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
      <section className='partners'>
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
      </section>
      <Reviews />
    </>
  );
}
