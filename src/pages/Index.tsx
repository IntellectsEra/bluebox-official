import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Shield, Package, Truck, HeartHandshake, ArrowRight } from "lucide-react";
import whyChooseImg from "@/assets/why-choose-img.jpg";
import productsBannerImg from "@/assets/products-banner.jpg";
import factoryFloorImg from "@/assets/factory-floor.jpg";

const FEATURES = [
  {
    icon: <Shield size={28} className="text-gold" />,
    title: "Quality Hardware",
    desc: "Premium-grade hardware engineered for durability, elegance, and flawless performance in every application.",
  },
  {
    icon: <Package size={28} className="text-gold" />,
    title: "Secure Packing",
    desc: "Secure and professional packaging ensuring product safety from our factory to your doorstep.",
  },
  {
    icon: <Truck size={28} className="text-gold" />,
    title: "Timely Dispatching",
    desc: "Efficient and timely delivery system. Your orders reach you on schedule, every time.",
  },
  {
    icon: <HeartHandshake size={28} className="text-gold" />,
    title: "Customer Satisfaction",
    desc: "Commitment to quality service and long-term relationships. Your satisfaction is our standard.",
  },
];

const HOME_PRODUCTS = products.slice(0, 6);

const CATEGORY_LINKS = [
  { name: "SS Hinges", href: "/products?category=hinges" },
  { name: "Mortise Locks", href: "/products?category=mortise-lock" },
  { name: "Door Handles", href: "/products?category=door-handles" },
  { name: "Castor Wheels", href: "/products?category=other" },
  { name: "Glass Fittings", href: "/products?category=other" },
  
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <HeroSlider />

      {/* ─── Why Choose Us ────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative overflow-hidden" style={{ minHeight: "300px" }}>
              <img
                src={whyChooseImg}
                alt="Premium door hardware installed in luxury interior"
                className="w-full h-full object-cover"
                style={{ minHeight: "300px" }}
              />
              {/* Gold corner accent */}
              <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-8 py-5">
                <div className="flex items-center justify-center gap-8">
                  {[
                    { value: "12+", label: "Years of Excellence" },
                    { value: "500+", label: "Products" },
                    { value: "5+", label: "Export Destinations" },
                    { value: "1000+", label: "Happy Clients" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-2xl font-bold text-gold leading-none">{s.value}</div>
                      <div className="font-body uppercase tracking-widest text-[9px] font-bold text-white/60 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex flex-col justify-center px-10 py-16 lg:py-20 animate-slide-up">
              <div className="section-divider mb-3">
                <span className="section-label">Our Story</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
                Why Choose BluBox Exports
              </h2>
              <div className="w-14 h-0.5 bg-gold mb-6"></div>
              <p className="font-body text-foreground/75 leading-relaxed mb-5">
                Our workspaces are crafted for those who value sophistication, comfort, and excellence. Every detail is designed to deliver a premium experience — elegant interiors, seamless services, and world-class facilities that elevate the way you work.
              </p>
              <p className="font-body text-foreground/75 leading-relaxed mb-8">
                We redefine premium by offering exceptional quality at an accessible price, ensuring you enjoy exclusivity without compromise. With a curated selection of distinctive hardware options, we empower you to express your style and professional identity.
              </p>
              {/* Stat: 1000+ clients */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-industrial-grey border-l-4 border-gold">
                <div className="font-display text-3xl font-bold text-navy">1000+</div>
                <div className="font-body text-sm text-foreground/65 uppercase tracking-widest font-bold">Happy Clients Across India & Worldwide</div>
              </div>
              <Link to="/about" className="btn-primary text-sm inline-flex items-center gap-2 self-start">
                <ArrowRight size={14} />
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Features ─────────────────────────────────── */}
      <section className="py-12 bg-navy border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Text + Cards */}
            <div className="px-8 md:px-12 py-16">
              <div className="section-divider mb-3">
                <span className="section-label text-gold">What We Offer</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
                Engineered Elegance<br />You Can Feel
              </h2>
              <div className="w-14 h-0.5 bg-gold mb-10"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURES.map((f, i) => (
                  <div
                    key={i}
                    className="border border-white/10 p-5 hover:border-gold transition-colors duration-250 animate-slide-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-3">
                      {f.icon}
                    </div>
                    <h3 className="font-body font-bold uppercase tracking-wide text-white text-sm mb-2">{f.title}</h3>
                    <p className="font-body text-white/55 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Factory image */}
            <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
              <img
                src={factoryFloorImg}
                alt="Hardware manufacturing factory floor with Indian workers"
                className="w-full h-full object-cover"
                style={{ minHeight: "520px", filter: "brightness(0.75)" }}
              />
              {/* Overlay stamp */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gold p-6 text-center" style={{ background: "rgba(11,31,58,0.75)" }}>
                <div className="font-body uppercase tracking-[0.3em] text-gold text-[10px] font-bold mb-2">Made in India</div>
                <div className="font-display text-3xl text-white font-semibold">Since 2012</div>
                <div className="font-body uppercase tracking-[0.2em] text-white/60 text-[9px] mt-1">Chennai, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Products Section ─────────────────────────────── */}
      <section className="bg-white border-b border-border-subtle pt-2">
        {/* Products Banner Image */}
        <div className="relative overflow-hidden" style={{ height: "180px" }}>
          <img
            src={productsBannerImg}
            alt="BluBox hardware collection including door handles, hinges, locks, and knobs"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="section-label text-gold mb-3">Product Range</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-2">
              Our Products
            </h2>
            <p className="font-display text-xl text-gold italic">
              Crafted for Today's Interiors
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Category Quick Links + View All */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {CATEGORY_LINKS.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.href}
                  className="border border-navy text-navy font-body font-bold uppercase tracking-widest text-[10px] px-4 py-2 hover:bg-navy hover:text-white transition-colors duration-200"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link to="/products" className="btn-primary text-sm inline-flex items-center gap-2 shrink-0">
              View All Products
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOME_PRODUCTS.map((p) => (
              <div key={p.id} className="animate-slide-up">
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────── */}
      <Testimonials />

      <Footer />
    </div>
  );
}
