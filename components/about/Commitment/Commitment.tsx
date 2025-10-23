import { Link } from 'lucide-react';
import './Commitment.css';
const Commitment = () => {
  const commitmentData = [
    {
      id: 1,
      img: '/assets/company 1.png',
      title: 'Building innovation since 2025',
      description:
        '“We are innovators dedicated to crafting high-quality, durable, and stylish home hardware.”',
    },
    {
      id: 2,
      img: '/assets/diamond 1.png',
      title: 'Our Premium Product Range',
      description:
        '“Wodfit combines innovative design with scalable functionality for modern businesses.”',
    },
    {
      id: 3,
      img: '/assets/globe 1.png',
      title: 'Worldwide service emphasis',
      description:
        '“Our global presence ensures that no matter where you are, you have access to our premium hardware solutions.”',
    },
    {
      id: 4,
      img: '/assets/equalizer 1.png',
      title: 'White Label & Customized Offering',
      description:
        '“We provide high-quality, ready-to-brand hardware while transforming unique visions into bespoke creations.”',
    },
  ];

  return (
    <section className='commitment'>
      <div className='container'>
        <div className='commitment-container'>
          <div className='commitment-heading'>
            <h2 className='heading-h2'>
              {' '}
              Our Commitment Ensures Businesses Scale with Confidence{' '}
            </h2>
          </div>
          <div className='commitment-grid'>
            {commitmentData.map((item) => (
              <div key={item.id} className='commitment-grid-items'>
                <img src={item.img} alt='' />
                <h5 className='commitment-h5'>{item.title}</h5>
                <p className='choose-us-p'>{item.description}</p>
              </div>
            ))}
          </div>
          <Link href='/contact'>
            {' '}
            <button className='btn large'>Contact us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
