import React from 'react';
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
        'We blend creativity and technology to deliver future-ready solutions.',
        'Our approach transforms unique visions into practical, high-value products.',
        'Every design is built to inspire growth and global competitiveness.',
      ],
    },
    {
      id: 2,
      img: '/assets/chooseus2.png',
      title: 'Quality & Trust',
      lists: [
        'Each product reflects precision, durability, and long-lasting performance',
        'We maintain strict quality standards to ensure consistency and reliability.',
        'Our transparent process builds lasting trust with every client.',
      ],
    },
    {
      id: 3,
      img: '/assets/chooseus3.png',
      title: 'Export',
      lists: [
        'Strong global networks enable seamless delivery across borders.',
        'We provide world-class hardware solutions tailored for international markets.',
        'Our export expertise ensures businesses scale confidently worldwide.',
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
            {chooseUsData.map((item) => (
              <div key={item.id} className='why-us-grid-item'>
                <img src={item.img} alt='' />
                <div className='why-us-grid-content'>
                  <h4 className='choose-us-h4'>{item.title}</h4>
                  <ul className='choose-us-list'>
                    {item.lists.map((list, index) => (
                      <li key={index}>
                        {' '}
                        <span className='tick'>
                          <Check className='w-5 h-5' />
                        </span>
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <Link href='/contact'>
            {' '}
            <button className='btn large'>Contact us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
