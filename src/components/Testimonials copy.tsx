import { Star } from "lucide-react";
import interiorShowcaseImg from "@/assets/interior-showcase.jpg";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Interiors, Bengaluru",
    rating: 5,
    text: "BluBox has been our trusted supplier for door hardware for over 3 years. The SS hinges and mortise locks are of exceptional quality — never had a single complaint from our clients.",
  },
  {
    name: "Mohammed Farhan",
    company: "Al-Farhan Trading, Dubai",
    rating: 5,
    text: "We import BluBox hardware regularly for our construction projects. The quality is consistent, packaging is excellent, and the team is very professional. Highly recommended for export buyers.",
  },
  {
    name: "Priya Selvam",
    company: "Selvam Builders, Chennai",
    rating: 5,
    text: "The door handles and cabinet hardware from BluBox are simply outstanding. Build quality, finish, and durability — everything is top-notch. Best in the Chennai market.",
  },
  {
    name: "Arun Nair",
    company: "Modern Furniture Works, Kochi",
    rating: 5,
    text: "Excellent products and after-sales service. The sofa legs and cabinet handles we ordered were exactly as specified. MOQ is reasonable and delivery was on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-navy py-[8vh]">
      {/* Background image with dark overlay */}
      {/* <img
        src={interiorShowcaseImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.15)", mixBlendMode: "luminosity" }}
      /> */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="section-divider">
            <span className="section-label text-gold">Client Voices</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
            Our Testimonials
          </h2>
          <p className="font-body text-white/60 text-lg italic font-light" style={{ fontFamily: "var(--font-display)" }}>
            Where Trust Begins
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 animate-slide-up hover:border-gold transition-colors duration-250"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/80 font-body text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-9 h-9 bg-gold flex items-center justify-center font-body font-bold text-navy text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-body font-bold text-sm">{t.name}</div>
                  <div className="text-white/50 font-body text-xs uppercase tracking-wide">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
