'use client';

import './AboutHero.css';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const AboutHero = () => {
  return (
    <>
      <section className='about'>
        <div className='container'>
          <motion.div
            className='about-content'
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className='about-p'>About Us</p>

            <h1 className='about-hero-h1'>
              Future-ready hardware solutions designed to meet{' '}
              <span className='about-h1'>today’s Business needs</span>
            </h1>

            <h5 className='about-hero-h5'>
              Founded in 2012 in Chennai, <b>Vasan Hardware</b> began with a
              vision to craft reliable, high-quality door hardware, furniture
              fittings, and modular hardware solutions that blend Indian
              craftsmanship with modern engineering.
            </h5>

            <button className='btn large'>Contact Us</button>
          </motion.div>
        </div>
      </section>

      <div className='about-underline'></div>
    </>
  );
};

export default AboutHero;
