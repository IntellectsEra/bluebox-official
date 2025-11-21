'use client';

import { PlusCircle } from 'lucide-react';
import Reviews from '../../reviews/Reviews';
import './Contact.css';
import { JSX, Suspense, useEffect, useMemo, useState } from 'react';
import ContactContent from '../ContactContent';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/input';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import type { Country } from 'react-phone-number-input';
import dynamic from 'next/dynamic';

/* ---------------------------------------------------------- */
/* -------------------------- TYPES --------------------------- */
/* ---------------------------------------------------------- */

interface CountryOption {
  value: Country;
  label: JSX.Element;
}

interface FormValues {
  name: string;
  email: string;
  country: Country;
  phone: string;
}

/* Typed react-select */
const Select = dynamic<{
  options: CountryOption[];
  value: CountryOption | null;
  onChange: (opt: CountryOption | null) => void;
  classNamePrefix?: string;
}>(() => import('react-select').then((mod) => mod.default), { ssr: false });

/* ---------------------------------------------------------- */

const allProducts: string[] = [
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
  const [products, setProducts] = useState<string[]>(['']);

  const { register, setValue, watch, handleSubmit, reset } =
    useForm<FormValues>({
      defaultValues: {
        name: '',
        email: '',
        country: 'IN' as Country,
        phone: '',
      },
    });

  const selectedCountry = watch('country');
  const phoneValue = watch('phone');

  /* ---------------- COUNTRY OPTIONS ---------------- */
  const countryOptions: CountryOption[] = useMemo(() => {
    return getCountries().map((c) => ({
      value: c as Country,
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src={`https://flagcdn.com/24x18/${c.toLowerCase()}.png`}
            style={{ width: '20px', height: '15px' }}
          />
          <span>{new Intl.DisplayNames(['en'], { type: 'region' }).of(c)}</span>
        </div>
      ),
    }));
  }, []);

  const selectedCountryOption =
    countryOptions.find((opt) => opt.value === selectedCountry) ?? null;

  /* ---------------- INIT ---------------- */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedProduct = params.get('product');
    setProducts(selectedProduct ? [selectedProduct] : ['']);

    const defaultCode = '+' + getCountryCallingCode('IN');
    setValue('phone', defaultCode);
  }, [setValue]);

  /* ---------------- PRODUCT HANDLERS ---------------- */
  const handleAddProduct = () => setProducts((prev) => [...prev, '']);

  const handleProductChange = (index: number, value: string) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

  const getAvailableProducts = (current: string) =>
    allProducts.filter((p) => !products.includes(p) || p === current);

  /* ---------------- SUBMIT TO FORMSPREE ---------------- */
  const onSubmit = async (data: FormValues) => {
    const productList = products
      .map((p, i) => `Product ${i + 1}: ${p}`)
      .join('\n');

    const payload = {
      name: data.name,
      email: data.email,
      country: data.country,
      phone: data.phone,
      products: productList,
    };

    try {
      const res = await fetch('https://formspree.io/f/xjklqowy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert('Something went wrong. Please try again.');
        return;
      }

      console.log(payload);

      alert('Your message has been sent successfully! 🎉');
      reset();
      setProducts(['']);
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  };

  /* ---------------------------------------------------------- */
  /* ------------------------- JSX ----------------------------- */
  /* ---------------------------------------------------------- */

  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='contact-grid'>
            <ContactContent />

            <div className='contact-grid-items-form'>
              <h4>Get a Quote</h4>

              <Suspense fallback={<div>Loading form...</div>}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* HIDDEN RHF COUNTRY */}
                  <input type='hidden' {...register('country')} />

                  {/* NAME */}
                  <div className='input-box'>
                    <label>
                      Name <span style={{ color: '#FF1F1F' }}>*</span>
                    </label>
                    <input
                      type='text'
                      {...register('name', { required: true })}
                    />
                  </div>

                  {/* EMAIL */}
                  <div className='input-box'>
                    <label>
                      Email <span style={{ color: '#FF1F1F' }}>*</span>
                    </label>
                    <input
                      type='email'
                      {...register('email', { required: true })}
                    />
                  </div>

                  {/* PHONE */}
                  <div className='input-box'>
                    <label>
                      Phone Number <span style={{ color: '#FF1F1F' }}>*</span>
                    </label>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {/* COUNTRY SELECT */}
                      <div style={{ flex: 1 }}>
                        <Select
                          options={countryOptions}
                          value={selectedCountryOption}
                          classNamePrefix='react-select'
                          onChange={(opt) => {
                            if (!opt) return;

                            setValue('country', opt.value);

                            const code = '+' + getCountryCallingCode(opt.value);
                            if (!phoneValue || phoneValue.startsWith('+')) {
                              setValue('phone', code);
                            }
                          }}
                        />
                      </div>

                      {/* PHONE INPUT */}
                      <div style={{ flex: 2 }}>
                        <PhoneInput
                          value={phoneValue}
                          onChange={(value) => setValue('phone', value ?? '')}
                          placeholder='Phone number'
                          className='phone-box'
                        />
                      </div>
                    </div>
                  </div>

                  {/* PRODUCT SELECTION */}
                  {products.map((prod, index) => (
                    <div key={index} className='input-column'>
                      <div className='input-box'>
                        <label>
                          Product {index + 1}
                          <span style={{ color: '#FF1F1F' }}>*</span>
                        </label>
                        <select
                          value={prod}
                          required
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
                        <label>
                          Min. Order Quantity (MOQ)
                          <span style={{ color: '#FF1F1F' }}>*</span>
                        </label>
                        <select name={`quantity_${index}`} required>
                          <option>10</option>
                          <option>20</option>
                          <option>30</option>
                          <option>40</option>
                          <option>50</option>
                        </select>
                      </div>
                    </div>
                  ))}

                  {/* ADD PRODUCT */}
                  <div className='new-product' onClick={handleAddProduct}>
                    <PlusCircle className='w-7 h-7 text-blue-700 cursor-pointer' />
                    <span>Add New Product</span>
                  </div>

                  {/* SUBMIT */}
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
