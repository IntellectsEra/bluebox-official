'use client';

import { useEffect, useState } from 'react';

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Target date — 24 Oct 2025, 9:00 AM
    let dest = new Date('Oct 24, 2025 09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      let diff = dest - now;

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='h-screen relative bg-gray-900'>
      <div className='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto'>
        <div className='w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex'>
          <div className='flex-col justify-end items-center lg:gap-16 gap-10 flex'>
            <img
              src='/logo.png'
              alt='pagedone logo image'
              className='w-auto h-18 object-cover'
            />
            <div className='flex-col justify-center items-center gap-10 flex'>
              <div className='flex-col justify-start items-center gap-2.5 flex'>
                <h2 className='text-center text-blue-400 md:text-6xl text-5xl font-bold font-manrope leading-normal'>
                  Coming Soon
                </h2>
                <p className='text-center text-gray-500 text-base font-normal leading-relaxed'>
                  Countdown to our big launch event!
                </p>
              </div>

              {/* Countdown */}
              <div className='flex items-start justify-center w-full gap-2 count-down-main'>
                {(['days', 'hours', 'minutes', 'seconds'] as const).map(
                  (label, i) => (
                    <div key={label} className='timer flex flex-col gap-0.5'>
                      <h3 className='text-center text-white text-2xl font-bold font-manrope leading-9'>
                        {timeLeft[label]}
                      </h3>
                      <p className='text-center text-gray-500 text-xs font-normal leading-normal w-full'>
                        {label.toUpperCase()}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Email Subscription */}
              <div className='w-full flex-col justify-center items-center gap-5 flex'>
                <h6 className='text-center text-blue-400 text-base font-semibold leading-relaxed'>
                  Launch Date:{' '}
                  <span className='text-white'>October 24, 2025 – 9:00 AM</span>
                </h6>
                <div className='justify-center items-center gap-2.5 flex sm:flex-row flex-col'>
                  <input
                    type='email'
                    placeholder='Type your mail...'
                    className='w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex'
                  />
                  <button className='sm:w-fit w-full px-3.5 py-2 bg-blue-400 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex'>
                    <span className='px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap'>
                      Notify Me
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className='text-center text-gray-500 text-sm font-normal leading-snug'>
            Get in touch with us:{' '}
            <a
              href='https://intellectsera.com/'
              target='_blank'
              className='hover:text-gray-100 transition-all duration-700 ease-in-out'
            >
              IntellectsEra
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
