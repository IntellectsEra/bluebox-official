import './AboutHero.css';
const AboutHero = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about-grid'>
          <div className='about-grid-item content'>
            <p className='about-p'>About Us</p>
            <h1 className='about-hero-h1'>
              Future-ready services designed to meet today’s{' '}
              <span className='about-h1'> Business needs </span>
            </h1>
            <h5 className='about-hero-h5'>
              Established in 2025, our journey began with a vision to create
              innovative, reliable.
            </h5>
            <button className='btn large'>Contact Us</button>
          </div>
          <div className='about-grid-item image'>
            <img src={'/assets/about.png'} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
