'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './ChooseUs.css';
import { Check } from 'lucide-react';
import Link from 'next/link';

const ChooseUs = () => {
  const chooseUsData = [
    {
      id: 1,
      img: '/assets/chooseus1.png',
      title: 'Innovation',
      lists: [
        'We combine design thinking with technical expertise to craft products that lead the market.',
        'Our solutions are engineered to enhance aesthetics, durability, and functionality.',
        'Every creation reflects our focus on modern design and long-term value.',
      ],
    },
    {
      id: 2,
      img: '/assets/chooseus2.png',
      title: 'Quality & Trust',
      lists: [
        'Each product meets international standards for strength and precision.',
        'Our transparent processes and strict quality controls ensure consistent reliability.',
        'We believe trust is built — one product, one partnership at a time.',
      ],
    },
    {
      id: 3,
      img: '/assets/chooseus3.png',
      title: 'Export',
      lists: [
        'Strong supply chains enable timely global delivery.',
        'Our export operations are built on efficiency, documentation accuracy, and responsive support.',
        'We help clients expand confidently with hardware built to global expectations.',
      ],
    },
  ];

  return (
    <section className='whyUs'>
      <div className='container'>
        <div className='why-choose-container'>
          <div className='why-choose-heading'>
            <h2 className='heading-h2'>Why Choose Us</h2>
          </div>

          <div className='why-us-grid'>
            {chooseUsData.map((item, index) => {
              // Alternate animations
              const imageFrom = index % 2 === 0 ? -80 : -80;
              const textFrom = index % 2 === 0 ? 80 : 80;

              return (
                <div key={item.id} className='why-us-grid-item'>
                  {/* IMAGE */}
                  <motion.img
                    src={item.img}
                    alt=''
                    initial={{ opacity: 0, x: imageFrom }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                  />

                  {/* TEXT */}
                  <motion.div
                    className='why-us-grid-content'
                    initial={{ opacity: 0, x: textFrom }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <h4 className='choose-us-h4'>{item.title}</h4>
                    <ul className='choose-us-list'>
                      {item.lists.map((list, i) => (
                        <li key={i}>
                          <span className='choose-dot'></span>
                          {list}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <Link href='/contact'>
            <button className='btn large'>Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
