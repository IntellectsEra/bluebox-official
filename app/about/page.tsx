import AboutHero from '@/components/about/AboutHero/AboutHero';
import ChooseUs from '@/components/about/ChooseUs/ChooseUs';
import Commitment from '@/components/about/Commitment/Commitment';
import Reviews from '@/components/reviews/Reviews';

export default function page() {
  return (
    <>
      <AboutHero />
      <Commitment />
      <ChooseUs />
      <Reviews />
    </>
  );
}
