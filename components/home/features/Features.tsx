import Link from 'next/link';
import './Features.css';
import { Check } from 'lucide-react';

const features = [
  {
    img: '/assets/feature-1.webp',
    title: 'Elevate Your Mood with Comfortable Furniture',
    desc: 'Your Surrounding have a profound impact on your mood. Discover how our high-quality furniture can transform your space into a haven of comfort and happiness',
    points: ['Unmatched Comfort', 'Crafted quality', 'Stylish Elegance'],
  },
  {
    img: '/assets/feature-2.webp',
    title: 'Elevate Your Space with Uncompromising Quality',
    desc: 'Experience the epitome of furniture quality. Our products are meticulously crafted with an unwavering commitment to excellence. From the finest material to expert craftsmanship each piece embodies durability, comfort and timeless style. Elevate your space with assurance of exceptional quality and lasting beauty',
    points: ['Unmatched Comfort', 'Crafted quality', 'Stylish Elegance'],
    reverse: true,
  },
];

const Features = () => {
  return (
    <section className='feature'>
      <div className='container'>
        <div className='feature-container'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-grid ${
                feature.reverse == true ? 'feature-grid2' : ''
              }`}
            >
              <img src={feature.img} alt='' />
              <div className='grid-right'>
                <h2 className='heading-h2 feature-title'>{feature.title}</h2>
                <p>{feature.desc}</p>
                <ul className='feature-list'>
                  {feature.points.map((point, i) => (
                    <li key={i}>
                      <span className='tick'>
                        <Check className='w-5 h-5' />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className='products-cta'>
                  <Link href='/contact'>
                    <button className='btn large'>Contact Us</button>
                  </Link>
                  <Link href='/products'>
                    <span className='btn-secondary'>View All Products</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
