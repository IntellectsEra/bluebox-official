'use client';

import Link from 'next/link';
import './Features.css';
import { Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface FeatureItem {
  img: string;
  title: string;
  desc: string;
  points: string[];
  reverse?: boolean;
}

const features: FeatureItem[] = [
  {
    img: '/assets/feature-1.webp',
    title: 'Elevate Your Mood with Comfortable Furniture',
    desc: 'Your Surrounding have a profound impact on your mood. Discover how our high-quality furniture can transform your space into a haven of comfort and happiness',
    points: ['Unmatched Comfort', 'Crafted quality', 'Stylish Elegance'],
  },
  {
    img: '/assets/feature-2.webp',
    title: 'Elevate Your Space with Uncompromising Quality',
    desc: 'Experience the epitome of furniture quality. Our products are meticulously crafted with an unwavering commitment to excellence. From the finest material to expert craftsmanship each piece embodies durability, comfort and timeless style.',
    points: ['Unmatched Comfort', 'Crafted quality', 'Stylish Elegance'],
    reverse: true,
  },
];

const Features = () => {
  return (
    <section className='feature'>
      <div className='container'>
        <div className='feature-container'>
          {features.map((feature, index) => {
            const isReverse = feature.reverse;

            /** IMAGE ANIMATION — depends on reverse */
            const imageVariants: Variants = {
              hidden: {
                opacity: 0,
                x: isReverse ? 80 : -80, // right for reverse, left for normal
              },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: 'easeOut' },
              },
            };

            /** TEXT ANIMATION — opposite of image */
            const textVariants: Variants = {
              hidden: {
                opacity: 0,
                x: isReverse ? -80 : 80, // left for reverse, right for normal
              },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: 'easeOut' },
              },
            };

            return (
              <motion.div
                key={index}
                className={`feature-grid ${isReverse ? 'feature-grid2' : ''}`}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image */}
                <motion.div variants={imageVariants}>
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={600}
                    height={500}
                    className='w-full object-cover'
                  />
                </motion.div>

                {/* Text */}
                <motion.div className='grid-right' variants={textVariants}>
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
                    <Link href='/products' className='link_all_btn'>
                      <span>View All Products</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
