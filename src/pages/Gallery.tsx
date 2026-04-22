import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, X } from "lucide-react";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import interiorShowcase from "@/assets/interior-showcase.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";
import aboutFactory from "@/assets/about-factory.jpg";
import productsBanner from "@/assets/products-banner.jpg";

type Item = {
  src: string;
  title: string;
  category: "Door Handles" | "Hinges" | "Cabinet" | "Locks" | "Knobs" | "Modular" | "Interiors";
  span?: "tall" | "wide" | "regular";
};

const ITEMS: Item[] = [
  { src: g1, title: "Brushed Brass Lever Handle", category: "Door Handles", span: "tall" },
  { src: g2, title: "Premium SS Welded Hinges", category: "Hinges" },
  { src: g3, title: "Modular Kitchen Pulls", category: "Cabinet", span: "tall" },
  { src: g4, title: "Heritage Mortise Set", category: "Locks" },
  { src: g5, title: "Classic Brass Knob", category: "Knobs", span: "tall" },
  { src: g6, title: "SS Kitchen Basket System", category: "Modular" },
  { src: g7, title: "Sofa Legs in Modern Living", category: "Interiors", span: "tall" },
  { src: g8, title: "Traditional Aldrop Bolt", category: "Locks" },
  { src: g9, title: "Hospitality Corridor Hardware", category: "Interiors", span: "tall" },
  { src: interiorShowcase, title: "Designer Interior Detail", category: "Interiors" },
  { src: factoryFloor, title: "Manufacturing Floor", category: "Modular" },
  { src: aboutFactory, title: "Quality Inspection", category: "Hinges" },
];

const CATEGORIES = ["All", "Door Handles", "Hinges", "Cabinet", "Locks", "Knobs", "Modular", "Interiors"] as const;

export default function Gallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const visible = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy" style={{ minHeight: "420px" }}>
        <img
          src={productsBanner}
          alt="Hardware gallery"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="section-label text-gold mb-4">Visual Inspiration</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-5">
            The BluBox Gallery
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            A curated showcase of hardware in real interiors — handles, hinges, locks, and modular fittings that bring spaces to life.
          </p>
        </div>
      </section>

      {/* ─── Breadcrumb ─────────────────────────────────────── */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy font-bold">Gallery</span>
          </nav>
        </div>
      </div>

      {/* ─── Filter Bar ─────────────────────────────────────── */}
      <section className="bg-white border-b border-border-subtle sticky top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 font-body uppercase tracking-widest text-[10px] font-bold border transition-colors duration-200
                  ${isActive
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy border-border-subtle hover:border-gold hover:text-gold"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── Masonry Gallery ────────────────────────────────── */}
      <section className="py-[6vh] bg-industrial-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {visible.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item)}
                className="group relative block w-full mb-5 break-inside-avoid overflow-hidden border border-border-subtle bg-white hover:border-gold transition-colors duration-300 animate-slide-up text-left"
                style={{ animationDelay: `${(i % 6) * 60}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="font-body uppercase tracking-widest text-[9px] text-gold font-bold mb-1">
                    {item.category}
                  </div>
                  <div className="font-display text-xl text-white font-semibold leading-tight">
                    {item.title}
                  </div>
                </div>
                {/* Static caption */}
                <div className="px-5 py-4 border-t border-border-subtle group-hover:border-gold/30 transition-colors">
                  <div className="font-body uppercase tracking-widest text-[9px] text-gold font-bold mb-1">
                    {item.category}
                  </div>
                  <div className="font-display text-base text-navy font-semibold">{item.title}</div>
                </div>
              </button>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-20 font-body text-foreground/50">
              No items in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <img
          src={interiorShowcase}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.25)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="section-label text-gold mb-3">Inspired by what you see?</div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
            Explore the Full Catalogue
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto mb-8 text-[15px] leading-relaxed">
            From premium SS hinges to modular kitchen baskets — discover hardware engineered for design and built to last.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/products" className="btn-gold text-sm inline-flex items-center gap-2">
              View All Products <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn-outline text-sm text-white border-white/40 hover:border-gold hover:text-gold">
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* ─── Lightbox ───────────────────────────────────────── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-6 animate-fade-in cursor-zoom-out"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-gold text-navy flex items-center justify-center hover:bg-gold-light transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[85vh] flex flex-col"
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full h-auto max-h-[75vh] object-contain border-2 border-gold"
            />
            <div className="bg-navy border-x-2 border-b-2 border-gold px-6 py-4">
              <div className="font-body uppercase tracking-widest text-[10px] text-gold font-bold mb-1">
                {lightbox.category}
              </div>
              <div className="font-display text-2xl text-white font-semibold">{lightbox.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
