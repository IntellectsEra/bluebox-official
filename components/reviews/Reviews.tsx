'use client';

import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    img: '/assets/Reviews1.png',
    country: 'India',
    name: 'Ravi Kumar',
    city: 'Mumbai',
    review:
      'Installed the Ganesh Golden Door Holder from BluBox Enterprises across our temple-style entrance. The rich golden finish and sturdy design uplifted the look instantly. Exceptional décor quality and reliable build.',
    product: 'Ganesh Golden Door Holder',
  },
  {
    img: '/assets/Reviews2.png',
    country: 'India',
    name: 'Meena Patel',
    city: 'Chennai',
    review:
      'Our workshop ordered the Heavy-Duty Caster Wheels for heavy cabinets. BluBox’s wheels roll smoothly and support heavy loads without squeak. A game-changer for our tool-storage units.',
    product: 'Heavy-Duty Caster Wheels',
  },
  {
    img: '/assets/Reviews3.png',
    country: 'India',
    name: 'Anil Singh',
    city: 'Bengaluru',
    review:
      'The Adjustable Door Stopper we chose from BluBox is sleek and functional. It keeps our corridor doors open at the perfect angle and blends well with modern interiors. Great value and elegant finish.',
    product: 'Adjustable Door Stopper',
  },
  // {
  //   img: '/assets/Reviews1.png',
  //   country: 'USA',
  //   name: 'Jessica Williams',
  //   city: 'Seattle, WA',
  //   review:
  //     'I replaced my old knobs with the Classic Brass Drawer Pull from BluBox Enterprises. The polished brass makes my kitchen drawers pop in style—smooth installation and premium feel. Highly recommend.',
  //   product: 'Classic Brass Drawer Pull',
  // },
  // {
  //   img: '/assets/Reviews2.png',
  //   country: 'USA',
  //   name: 'Michael Brown',
  //   city: 'Austin, TX',
  //   review:
  //     'Our lab racks now have BluBox’s Heavy-Duty Caster Wheels under them, and the mobility is outstanding. These wheels hold up under heavy equipment, move easily and have saved us time. Top choice.',
  //   product: 'Heavy-Duty Caster Wheels',
  // },
  // {
  //   img: '/assets/Reviews3.png',
  //   country: 'USA',
  //   name: 'Emily Johnson',
  //   city: 'San Francisco, CA',
  //   review:
  //     'The Ganesh Golden Door Holder arrived from BluBox’s Indian facility and now graces our front door. The intricate craftsmanship and rich brass tone give our home a luxury look. Excellent product and service.',
  //   product: 'Ganesh Golden Door Holder',
  // },
];
const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='container'>
        <h2 className='client-title heading-h2'>Our Client Review</h2>
        <div className='reviews-grid'>
          {reviewsData.map((review, index) => (
            <div key={index} className='reviews-grid-item'>
              <img src={review.img} alt='' />
              {index === 0 && (
                <button className='arrow left'>
                  {' '}
                  <ArrowLeft />{' '}
                </button>
              )}
              {index === reviewsData.length - 1 && (
                <button className='arrow right'>
                  {' '}
                  <ArrowRight />{' '}
                </button>
              )}
              <div className='review-grid-customer'>
                <div className='image-wrapper'>
                  <span>{review.name[0]}</span>
                </div>
                <h4 className='cutsomer-heading'>{review.name}</h4>
                <p className='name'>{review.city}</p>
                <p className='desc'>"{review.review}"</p>
                <span className='ratings'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i === 4 ? 'fifth-star' : ''} />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
