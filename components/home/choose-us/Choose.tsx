import './ChooseUs.css';

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

const ChooseUs = () => {
  return (
    <section className='choose-us'>
      <div className='container'>
        <div className='about-container'>
          <div className='title-heading'>
            <h2 className='heading-h2 chooseUs-heading'>Why Choosing Us</h2>
          </div>
          <div className='choose-us-grid'>
            {choose.map((choose, index) => (
              <div className='choose-us-grid-item' key={index}>
                <a href='#'>{choose.title}</a>
                <p className='choose-us-p margin-top'>{choose.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
