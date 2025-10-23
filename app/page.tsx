import ChooseUs from '@/components/home/choose-us/Choose';
import Features from '@/components/home/features/Features';
import Hero from '@/components/home/hero/Hero';
import ProductGrid from '@/components/home/product-grid/ProductGrid';
import Reviews from '@/components/reviews/Reviews';

export default function page() {
  return (
    <>
      <Hero />
      <ChooseUs />
      <ProductGrid />
      <Features />
      <Reviews />
    </>
  );
}
