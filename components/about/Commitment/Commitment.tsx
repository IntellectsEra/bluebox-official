import './Commitment.css';
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
      description:(
        <>
        <span className="blue-text">BluBox Exports</span> — our global business arm
         created to connect the quality and reliability of Indian hardware with the world
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
                <p className='commitment-p'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
