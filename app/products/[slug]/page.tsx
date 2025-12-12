import ProductHero from "@/components/products-table/ProductHero";
import SpecificationTable from "@/components/products-table/SepcificationTable";
import products from "@/data/products.json";
import ProductGrid from "@/components/home/product-grid/ProductGrid";
import Reviews from "@/components/reviews/Reviews";

export default async function ProductPage({ params }: any) {
  const { slug } = await params;

  const product = products.find((p: any) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <ProductHero
          image={product.image}
          title={product.title}
          description={product.description}
          brochureUrl={product.brochure}
        />

        {/* RIGHT SECTION */}
        <SpecificationTable specifications={product.specifications} />
      </div>

      {/* Explore More Products */}
      <div className="mt-20">
        <ProductGrid />
      </div>
      <div className="mt-20">
        <Reviews />
      </div>
    </section>
  );
}
