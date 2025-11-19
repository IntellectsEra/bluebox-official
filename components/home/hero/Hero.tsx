'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: 'Strong Grip, Lasting Style',
    subtitle: 'Handles that Blend Design and Strength',
  },
  {
    title: 'Roll Smooth, Last Long',
    subtitle: 'Wheels that Move with Power',
  },
  {
    title: 'Secure Stop, Sleek Style',
    subtitle: 'Stops with Style & Strength',
  },
  {
    title: 'Durable Spin, Elegant Fit',
    subtitle: 'Durable Hinges with Elegant Design',
  },
];

const Hero = () => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className='hero'>
      <div className='hero-container'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className='swiper'
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`swiper-slide swiper-slide-${index + 1}`}
            >
              <motion.div
                className='slide-content'
                variants={contentVariants}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className='heading-h3 slide-heading'>{slide.title}</h3>
                <h4 className='heading-h4 slide-subheading'>
                  {slide.subtitle}
                </h4>
                <Link href='/products'>
                  <button className='btn small'>Explore More</button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Swiper Navigation */}
          <div className='swiper-button-prev custom-arrow'>
            <ArrowLeft />
          </div>
          <div className='swiper-button-next custom-arrow'>
            <ArrowRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
