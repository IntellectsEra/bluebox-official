'use client';

import './ChooseUs.css';
import { motion, Variants } from 'framer-motion';

const choose = [
  {
    title: 'Luxury facilities',
    description:
      'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities',
  },
  {
    title: 'Affordable Price',
    description:
      'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here',
  },
  {
    title: 'Main Choices',
    description:
      'We provide many unique workspace choices so that you can choose the workspace to your liking',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ChooseUs = () => {
  return (
    <section className='choose-us'>
      <div className='container'>
        <div className='about-container'>
          {/* Heading Animation */}
          <motion.div
            className='title-heading'
            variants={itemVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className='heading-h2 chooseUs-heading'>Why Choosing Us</h2>
          </motion.div>

          {/* Cards Animation */}
          <motion.div
            className='choose-us-grid'
            variants={containerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            {choose.map((item, index) => (
              <motion.div
                className='choose-us-grid-item'
                key={index}
                variants={itemVariants}
              >
                <a href='#'>{item.title}</a>
                <p className='choose-us-p margin-top'>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
