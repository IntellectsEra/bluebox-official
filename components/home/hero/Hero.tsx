'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
    subtitle: 'Wheels that Move with Power',
  },
  {
    title: 'Secure Stop, Sleek Style',
    subtitle: 'Stops with Style & Strength',
  },

  {
    title: 'Durable Spin, Elegant Fit',
    subtitle: 'Durable Hinges with Elegant Design',
  },
];

const brands = [
  { name: 'LumberLand', font: 'Inter', weight: 'bold' },
  { name: 'PowerPro', font: 'Poppins', weight: 400 },
  { name: 'Tool Heaven', font: 'Montserrat', weight: 600 },
  { name: 'FurniCraft', font: 'Montserrat', weight: 'bold' },
  { name: 'CutMaster', font: 'Poppins', weight: 'bold' },
  { name: 'SafetyShield', font: 'Inter', weight: 'bold' },
];

const Hero = () => {
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
              <div className='slide-content'>
                <h3 className='heading-h3 slide-heading'>{slide.title}</h3>
                <h4 className='heading-h4 slide-subheading'>
                  {slide.subtitle}
                </h4>
                <Link href='/products'>
                  {' '}
                  <button className='btn small '>Explore More</button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className='swiper-button-prev custom-arrow'>
            <ArrowLeft />
          </div>
          <div className='swiper-button-next custom-arrow'>
            <ArrowRight />
          </div>
        </Swiper>
        <div className='container'>
          <ul className='hero-list'>
            {brands.map((brand, index) => (
              <li
                key={index}
                className='hero-item'
                style={{ fontFamily: brand.font, fontWeight: brand.weight }}
              >
                {brand.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
