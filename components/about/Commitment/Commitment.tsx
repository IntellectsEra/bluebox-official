'use client';

import './Commitment.css';
import { motion, Variants } from 'framer-motion';

const headingVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between cards
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Commitment = () => {
  const commitmentData = [
    {
      id: 1,
      img: '/assets/company 1.png',
      title: 'Building Trust Since 2012',
      description:
        'From a local retail store to an international supplier our foundation is built on reliability, service, and long-term relationships.',
    },
    {
      id: 2,
      img: '/assets/diamond 1.png',
      title: 'Premium Product Range',
      description: (
        <>
          <span className='blue-text'>BluBox Exports</span> — our global
          business arm created to connect the quality and reliability of Indian
          hardware with the world
        </>
      ),
    },
    {
      id: 3,
      img: '/assets/globe 1.png',
      title: 'Global Reach, Local Values',
      description:
        'With a growing export network, we deliver Indian-made hardware worldwide with consistent quality and service.',
    },
    {
      id: 4,
      img: '/assets/equalizer 1.png',
      title: 'White Label & Custom Solutions',
      description:
        'From OEM partnerships to customized branding, we support clients with flexible, scalable hardware solutions that match their market needs.',
    },
  ];

  return (
    <section className='commitment'>
      <div className='container'>
        <div className='commitment-container'>
          {/* Heading Animation */}
          <motion.div
            className='commitment-heading'
            variants={headingVariant}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='heading-h2'>
              Our Commitment Ensures Businesses Scale with Confidence
            </h2>
          </motion.div>

          {/* Cards Animation */}
          <motion.div
            className='commitment-grid'
            variants={containerVariant}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
          >
            {commitmentData.map((item) => (
              <motion.div
                key={item.id}
                className='commitment-grid-items'
                variants={cardVariant}
              >
                <img src={item.img} alt={item.title} />
                <h5 className='commitment-h5'>{item.title}</h5>
                <p className='commitment-p'>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
