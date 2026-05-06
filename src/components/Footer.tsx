import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// const PRODUCT_LINKS = [
//   "SS Hinges (Premium / Welded)",
//   "Door Handles",
//   "Door Chain",
//   "Door Stoppers",
//   "Aldrops",
//   "Tower Bolts",
//   "Mortise Locks",
//   "Cabinet Handles",
//   "Knobs",
//   "Sofa Legs",
//   "Castor Wheels",
//   "SS Kitchen Baskets",
// ];

const PRODUCT_LINKS = [
  "Hinges",
  "Mortise Locks",
  "Door Stoppers",
  "Tower Bolts",
  "Glass Fittings",
  "Door Handles",
  "Castor Wheel",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* ─── Main Footer ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                className="text-3xl font-bold text-white"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                BluBox
              </div>
              <div className="text-gold font-body font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
                Exports
              </div>
              <div className="w-12 h-0.5 bg-gold mb-4"></div>
              <p className="text-white/70 font-body text-sm leading-relaxed">
                Chennai's Premier Hardware Authority. Trusted by builders,
                architects, and exporters since 2012.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919884411134"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200 font-body"
              >
                <Phone size={13} className="text-gold shrink-0" />
                +91 98844 11134
              </a>
              <a
                href="mailto:enquiry@bluboxexports.com"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200 font-body"
              >
                <Mail size={13} className="text-gold shrink-0" />
                enquiry@bluboxexports.com
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-body font-bold uppercase tracking-[0.15em] text-[11px] text-gold mb-5 border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200 font-body text-sm"
                  >
                    <ArrowRight size={11} className="text-gold shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Our Products */}
          <div className="lg:col-span-2">
            <h4 className="font-body font-bold uppercase tracking-[0.15em] text-[11px] text-gold mb-5 border-b border-white/10 pb-3 ">
              Our Products
            </h4>
            <ul className="grid grid-col-1 lg:grid-cols-2 items-center space-y-2.5">
              {PRODUCT_LINKS.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200 font-body text-sm"
                  >
                    <ArrowRight size={11} className="text-gold shrink-0" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-body font-bold uppercase tracking-[0.15em] text-[11px] text-gold mb-5 border-b border-white/10 pb-3">
              Our Office
            </h4>
            <div className="flex items-start gap-2 text-white/70 font-body text-sm leading-relaxed mb-6">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <address className="not-italic">
                No.39, Ground Floor,
                <br />
                Ambedkar Street,
                <br />
                Aparna Nagar,
                <br />
                Ayappakkam,
                <br />
                Chennai – 600077,
                <br />
                Tamil Nadu, India
              </address>
            </div>
            <Link
              to="/contact"
              className="btn-gold text-[11px] py-2.5 px-5 inline-block"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Footer Bottom ────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 font-body text-xs">
          <span>
            © IntellectsEra Technology Pvt Ltd 2026. All rights reserved.
          </span>
          <span className="uppercase tracking-widest text-[10px]">
            Since 2012 - Chennai, India
          </span>
        </div>
      </div>
    </footer>
  );
}
