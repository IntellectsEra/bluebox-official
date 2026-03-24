import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ArrowLeft, Download, MessageSquare, ChevronRight } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center py-32 text-center px-6">
          <h1 className="font-display text-5xl text-navy mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="btn-primary text-sm">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }


  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  const fallbackRelated = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  const displayRelated = related.length >= 2 ? related : fallbackRelated;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest flex-wrap">
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link to="/products" className="hover:text-gold transition-colors">
              Products
            </Link>
            <ChevronRight size={10} />
            <span className="text-navy font-bold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ─── Product Detail ────────────────────────────────── */}
      <section className="py-[6vh] bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Image Gallery */}
            <div>
              <div className="animate-slide-up flex gap-3">
                {/* Thumbnail column on the left */}
                <div className="flex flex-col gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 border-2 overflow-hidden transition-colors duration-200 bg-industrial-grey flex-shrink-0 ${
                        activeImage === i
                          ? "border-gold"
                          : "border-border-subtle hover:border-navy"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/placeholder.svg";
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Main image on the right */}
                <div className="bg-industrial-grey border border-border-subtle overflow-hidden flex-1">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="animate-slide-up animate-slide-up-delay-1">
              <div className="flex items-start justify-between mb-2">
                <span className="section-label text-gold">
                  Ref. {product.refNo}
                </span>
                <span className="font-body text-[10px] uppercase tracking-widest bg-industrial-grey text-navy font-bold px-3 py-1">
                  {product.category.replace("-", " ")}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy leading-tight mb-4">
                {product.name}
              </h1>
              <div className="w-12 h-0.5 bg-gold mb-5"></div>

              <p className="font-body text-foreground/70 text-base leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={product.pdf}
                  download
                  className="btn-primary text-sm inline-flex items-center gap-2"
                >
                  <Download size={14} />
                  Download Brochure
                </a>
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="btn-outline text-sm inline-flex items-center gap-2"
                >
                  <MessageSquare size={14} />
                  Send Enquiry
                </Link>
              </div>

              {/* Quick specs */}
              <div className="border border-border-subtle">
                <div className="bg-navy px-4 py-2.5">
                  <span className="font-body font-bold uppercase tracking-widest text-[11px] text-white">
                    Key Specifications
                  </span>
                </div>
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex items-center px-4 py-2.5 ${i < 3 ? "border-b border-border-subtle" : ""} ${i % 2 === 0 ? "bg-white" : "bg-industrial-grey"}`}
                  >
                    <span className="font-body font-bold uppercase tracking-wide text-[10px] text-navy/70 w-40 shrink-0">
                      {spec.label}
                    </span>
                    <span className="font-body text-sm text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Full Specification Table ─────────────────────── */}
      {/* <section className="py-[5vh] bg-industrial-grey border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-divider mb-6">
            <span className="section-label">Technical Data</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-navy mb-8">Product Specifications</h2>
          <div className="max-w-2xl shadow-hard">
            <table className="spec-table">
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>Specification</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product Name</td>
                  <td>{product.name}</td>
                </tr>
                {product.specs.map((spec, i) => (
                  <tr key={i}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* ─── Explore Other Products ───────────────────────── */}
      <section className="py-[6vh] bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="section-divider mb-3 justify-start">
                <span className="section-label">Discover More</span>
              </div>
              <h2 className="font-display text-3xl font-semibold text-navy">
                Explore Other Products
              </h2>
            </div>
            <Link
              to="/products"
              className="btn-outline text-xs py-2.5 px-5 hidden sm:block"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayRelated.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}
