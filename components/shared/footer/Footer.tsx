import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-content'>
        <div className='footer-brand'>
          <img src={'/assets/logo.png'} alt='' />
        </div>
        <p>Copyright 2025. All rights reserved. Contact us at our email</p>
      </div>
    </footer>
  );
};

export default Footer;
