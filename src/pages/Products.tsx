import { useState, useMemo, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, CATEGORIES } from "@/data/products";
import { Search, SlidersHorizontal } from "lucide-react";
import productsBannerImg from "/main/products.jpeg";

export default function Products() {
  const { product } = useParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const activeCategory = product || "all";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeCategory]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCat =
        activeCategory === "all" || p.category === activeCategory;

      const matchesSearch =
        search === "" || p.name.toLowerCase().includes(search.toLowerCase());

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  const setCategory = (cat: string) => {
    if (cat === "all") {
      navigate("/products");
    } else {
      navigate(`/products/${cat}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="relative overflow-hidden" style={{ height: "320px" }}>
        <img
          src={productsBannerImg}
          alt="BluBox premium hardware collection"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45)" }}
        />

        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="section-label text-gold mb-3">Our Catalogue</div>

            <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3 leading-tight">
              All Products
            </h1>

            <p className="font-body text-white/70 text-base">
              Explore Our Complete Range of Premium Hardware Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>

            <span>/</span>

            <span className="text-navy font-bold">Products</span>
          </nav>
        </div>
      </div>

      {/* Filters + Grid */}
      <section className="py-10 bg-industrial-grey min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategory(cat.value)}
                  className={`font-body font-bold uppercase tracking-widest text-[10px] px-4 py-2.5 border transition-colors duration-200
                    ${
                      activeCategory === cat.value
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-navy border-border-subtle hover:border-navy"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="flex items-end justify-between mb-6 gap-4 flex-col sm:flex-row">
            {/* Search */}
            <div className="relative flex-1 max-w-sm w-full">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input pl-9 text-sm py-2.5"
              />
            </div>

            {/* Count */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={13} className="text-navy/40" />

              <span className="font-body text-sm text-foreground/50 uppercase tracking-wide font-bold">
                Showing {filtered.length} of {products.length} Products
              </span>
            </div>
          </div>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-border-subtle">
              <div className="font-display text-3xl text-navy/30 mb-3">
                No Products Found
              </div>

              <p className="font-body text-foreground/50 text-sm">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
