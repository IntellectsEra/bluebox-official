import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const SLIDES = [
  {
    image: hero1,
    label: "Precision Engineering",
    headline: "Strong Grip,\nLasting Style",
    subline: "Handles that Blend Design and Strength",
    cta: "Explore Products",
    href: "/products",
  },
  {
    image: hero2,
    label: "Premium Hardware",
    headline: "The Standard of\nArchitectural Hardware",
    subline: "SS Hinges, Locks & Fittings — Engineered for Excellence",
    cta: "View Catalogue",
    href: "/products",
  },
  {
    image: hero3,
    label: "Manufacturing Authority",
    headline: "Precision in Every\nPivot & Seal",
    subline: "Manufactured in Chennai. Trusted Across the Globe Since 2012.",
    cta: "About Us",
    href: "/about",
  },
  {
    image: hero4,
    label: "Export Ready",
    headline: "Export-Grade\nQuality, Always",
    subline: "Professional Packaging. Timely Dispatch. Global Standards.",
    cta: "Get a Quote",
    href: "/contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section className="relative overflow-hidden" style={{ background: "#0B1F3A" }}>
      {/* Outer Navy Frame */}
      <div className="p-4 md:p-6 bg-navy">
        <div className="relative overflow-hidden" style={{ height: "clamp(380px, 60vh, 620px)" }}>

          {/* Slides */}
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
            >
              <img
                src={s.image}
                alt={s.headline}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.5)" }}
              />
            </div>
          ))}

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div key={current} className="animate-slide-up max-w-2xl">
              <div className="section-label mb-4 text-gold">{slide.label}</div>
              <h1
                className="text-white mb-4 leading-[1.05]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  whiteSpace: "pre-line",
                  textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                {slide.headline}
              </h1>
              <p className="text-white/80 font-body font-medium mb-8 text-base md:text-lg max-w-xl leading-relaxed">
                {slide.subline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={slide.href} className="btn-gold text-sm">
                  {slide.cta}
                </Link>
                <a href="tel:+919884411134" className="btn-outline-gold text-sm">
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy/60 hover:bg-gold text-white hover:text-navy flex items-center justify-center transition-all duration-200 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-navy/60 hover:bg-gold text-white hover:text-navy flex items-center justify-center transition-all duration-200 border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 ${i === current ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ticker Strip */}
      <div className="bg-gold overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap animate-[slideLeft_20s_linear_infinite]">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="font-body font-bold uppercase tracking-widest text-[10px] text-navy px-8">
              Door Handles &nbsp;·&nbsp; SS Hinges &nbsp;·&nbsp; Mortise Locks &nbsp;·&nbsp; Cabinet Handles &nbsp;·&nbsp; Tower Bolts &nbsp;·&nbsp; Aldrops &nbsp;·&nbsp; Door Chains &nbsp;·&nbsp; Sofa Legs &nbsp;·&nbsp; Kitchen Baskets &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
