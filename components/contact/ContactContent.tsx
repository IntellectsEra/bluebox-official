'use client';

import { MapPin, Phone } from 'lucide-react';
import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function ContactContent() {
  const container: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className='contact-grid-items'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={item}>Contact us</motion.p>

      <motion.h2 variants={item} className='heading-h2 contact-heading'>
        Premium Fittings for Every Need, <span>Built to Last.</span>
      </motion.h2>

      <motion.p variants={item}>
        Discover a wide range of high-quality hinges, handles, and locks.
        Durable, functional, and stylish fittings crafted to meet global
        standards.
      </motion.p>

      <motion.hr variants={item} className='dotted-line' />

      <motion.div variants={item} className='contact-info'>
        <motion.div variants={item} className='contact-info-item'>
          <MapPin className='contact-icon' />
          <p>
            No.39, Ground Floor, Ambedkar Street, Aparna Nagar, Ayappakkam,
            Chennai - 600077.
          </p>
        </motion.div>

        <motion.div variants={item} className='contact-info-item'>
          <Phone className='contact-icon' />
          <p>+91 98844-11134</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
