import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    img: '/assets/Reviews1.png',
    customerName: 'Bang Upin',
    title: 'Pedangan Asongan',
    desc: 'Thank you so much, my room now looks much more luxurious and gives off an expensive vibe',
  },
  {
    img: '/assets/Reviews1.png',
    customerName: 'Mpok3Ina',
    title: 'Karyawan Swasta',
    desc: 'Thank you so much, my room now looks much more luxurious and gives off an expensive vibe',
  },
  {
    img: '/assets/Reviews2.png',
    customerName: 'Ibuk Sukijan',
    title: 'Ibu Rumah Tangga',
    desc: "Thank you, Panto, I now feel like I'm living in a luxury apartment thanks to these very elegant items.",
  },
];

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='container'>
        <h2 className='client-title heading-h2'>Our Client Review</h2>
        <div className='reviews-grid'>
          {reviewsData.map((review, index) => (
            <div key={index} className='reviews-grid-item'>
              <img src={review.img} alt='' />
              {index === 0 && (
                <button className='arrow left'>
                  {' '}
                  <ArrowLeft />{' '}
                </button>
              )}
              {index === reviewsData.length - 1 && (
                <button className='arrow right'>
                  {' '}
                  <ArrowRight />{' '}
                </button>
              )}
              <div className='review-grid-customer'>
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1} `}
                  alt={review.customerName}
                />
                <h4 className='cutsomer-heading'>{review.customerName}</h4>
                <p className='name'>{review.title}</p>
                <p className='desc'>"{review.desc}"</p>
                <span className='ratings'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={i === 4 ? 'fifth-star' : ''} />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
