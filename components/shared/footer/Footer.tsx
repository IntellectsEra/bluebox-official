import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-content'>
        <div className='footer-brand'>
          <img src={'/assets/logo.png'} alt='' />
        </div>
        <p>
          © 2025{' '}
          <Link href={'https://intellectsera.com/'} target='_blank'>
            IntellectsEra Technologies Pvt Ltd
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
