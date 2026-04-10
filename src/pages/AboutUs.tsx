import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Award, Layers, BadgeCheck } from "lucide-react";
import aboutBannerImg from "/main/about.jpeg";
import aboutFactoryImg from "@/assets/about-factory.jpg";
import factoryFloorImg from "@/assets/factory-floor.jpg";
import exportShippingImg from "@/assets/export-shipping.jpg";
import interiorShowcaseImg from "@/assets/interior-showcase.jpg";
import Commitments from "@/components/Commitments";

const WHY_US = [
  {
    no: "01",
    title: "Innovation",
    points: [
      "We combine design thinking with technical expertise to create products that lead the market.",
      "Our solutions enhance aesthetics, durability, and functionality.",
      "Every product reflects a commitment to modern design and long-term value.",
    ],
  },
  {
    no: "02",
    title: "Quality & Trust",
    points: [
      "Each product meets international standards for strength and precision.",
      "Our transparent processes and strict quality control ensure consistent reliability.",
      "We believe trust is built — one product, one partnership at a time.",
    ],
  },
  {
    no: "03",
    title: "Export Excellence",
    points: [
      "Our strong supply chain ensures timely global delivery.",
      "We operate with accuracy in documentation and responsive customer support.",
      "We empower clients to expand confidently with globally competitive hardware solutions.",
    ],
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-navy"
        style={{ minHeight: "520px" }}
      >
        {/* Background image */}
        <img
          src={aboutBannerImg}
          alt="Hardware manufacturing factory"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="animate-slide-up">
            <div className="section-label text-gold mb-4">
              About BluBox Exports
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
              Future-Ready Hardware Solutions Designed for Today's Business
              Needs
            </h1>
            <div className="w-16 h-0.5 bg-gold mb-6"></div>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
              Founded in 2012 in Chennai, Vasan Hardware began with a vision to
              craft reliable, high-quality door hardware, furniture fittings,
              and modular hardware solutions that seamlessly blend Indian
              craftsmanship with modern engineering.
            </p>
            <Link
              to="/contact"
              className="btn-gold text-sm inline-flex items-center gap-2"
            >
              Partner With Us
              <ArrowRight size={14} />
            </Link>
          </div>
          {/* Hero right side stats */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up animate-slide-up-delay-2">
            {[
              { value: "12+", label: "Years of Experience" },
              { value: "500+", label: "Products in Catalogue" },
              { value: "50+", label: "Export Destinations" },
              { value: "1000+", label: "Happy Clients" },
            ].map((stat, i) => (
              <div
                key={i}
                className="border border-white/80 p-5 text-center"
                style={{ background: "rgba(200,169,106,0.08)" }}
              >
                <div className="font-display text-4xl font-bold text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-body uppercase tracking-widest text-[9px] font-bold text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Breadcrumb strip ─────────────────────────────── */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-navy font-bold">About Us</span>
          </nav>
        </div>
      </div>

      {/* ─── Our Commitment ───────────────────────────────── */}
      <section className="py-[8vh] bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-divider">
              <span className="section-label">Our Foundation</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
              Our Commitment Ensures Businesses Scale with Confidence
            </h2>
          </div>
          {/* 2x2 visual cards with images */}
          <Commitments />
        </div>
      </section>

      {/* ─── Why Choose Us ────────────────────────────────── */}
      <section className="py-12 bg-industrial-grey border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: image */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "480px" }}
            >
              <img
                src={aboutFactoryImg}
                alt="Premium hardware products"
                className="w-full h-full object-cover"
                style={{ minHeight: "480px" }}
              />
            </div>

            {/* Right: Why Us content */}
            <div className="px-8 md:px-12 py-16 bg-white">
              <div className="text-center mb-10">
                <div className="section-divider">
                  <span className="section-label">Our Strengths</span>
                </div>
                <h2 className="font-display text-4xl font-semibold text-navy">
                  Why Choose Us
                </h2>
              </div>
              <div className="space-y-0 border border-border-subtle">
                {WHY_US.map((item, i) => (
                  <div
                    key={i}
                    className={`p-6 animate-slide-up ${i < 2 ? "border-b border-border-subtle" : ""}`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="font-display text-4xl font-bold text-gold/30 shrink-0 leading-none">
                        {item.no}
                      </div>
                      <div>
                        <div className="w-6 h-0.5 bg-gold mb-3"></div>
                        <h3 className="font-body font-bold uppercase tracking-widest text-navy text-sm mb-3">
                          {item.title}
                        </h3>
                        <ul className="space-y-2">
                          {item.points.map((pt, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-foreground/65 font-body text-sm leading-relaxed"
                            >
                              <span className="text-gold mt-1 shrink-0">—</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Timeline / Journey ───────────────────────────── */}
      <section className="py-12 bg-white border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: text */}
            <div className="px-8 md:px-12 py-16">
              <div className="section-divider mb-3">
                <span className="section-label">Our Journey</span>
              </div>
              <h2 className="font-display text-4xl font-semibold text-navy mb-3">
                A Decade of Excellence
              </h2>
              <div className="w-14 h-0.5 bg-gold mb-10"></div>
              <div className="space-y-0 border-l-2 border-border-subtle ml-4">
                {[
                  {
                    year: "2012",
                    label: "Founded in Chennai as Vasan Hardware",
                  },
                  {
                    year: "2015",
                    label: "Expanded to B2B supply for builders & contractors",
                  },
                  {
                    year: "2019",
                    label: "Launched BluBox Exports, our global arm",
                  },
                  { year: "2024", label: "50+ export destinations worldwide" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative pl-8 pb-8 animate-slide-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold border-2 border-white"></div>
                    <div className="font-display text-2xl font-bold text-gold mb-1">
                      {item.year}
                    </div>
                    <div className="font-body text-foreground/65 text-sm leading-relaxed">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: export shipping image */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "450px" }}
            >
              <img
                src={exportShippingImg}
                alt="Export shipping from Chennai port"
                className="w-full h-full object-cover"
                style={{ minHeight: "450px" }}
              />
              <div className="absolute inset-0 bg-navy/50"></div>
              <div className="absolute bottom-0 left-0 right-0 px-8 py-6">
                <div className="font-body uppercase tracking-[0.2em] text-gold text-[10px] font-bold mb-1">
                  Exporting to 50+ countries
                </div>
                <div className="font-display text-2xl text-white font-semibold">
                  Trusted Globally Since 2012
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────── */}
      <Testimonials />

      <Footer />
    </div>
  );
}
