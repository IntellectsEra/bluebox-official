import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Download, Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full z-50 sticky top-0">
      {/* ─── Utility Bar ─────────────────────────────────── */}
      <div className="bg-navy text-white py-2 border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919884411134"
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200 font-body tracking-wide"
            >
              <Phone size={12} />
              <span>+91 98844 11134</span>
            </a>
            <a
              href="mailto:enquiry@bluboxexports.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200 font-body tracking-wide"
            >
              <Mail size={12} />
              <span>enquiry@bluboxexports.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-body uppercase tracking-widest text-gold text-[10px] font-bold hidden sm:block">
              Since 2012 — Chennai, India
            </span>
            <a
              href="/documents/Brochure.pdf"
              target="_blank"
              download
              className="flex items-center gap-1.5 bg-gold text-navy px-4 py-1.5 font-body font-bold uppercase tracking-widest text-[10px] hover:bg-gold-light transition-colors duration-200"
            >
              <Download size={11} />
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Navigation ─────────────────────────────── */}
      <div className="bg-white border-b-2 border-navy shadow-[0_2px_8px_rgba(11,31,58,0.08)]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <img
              src={"/logo.png"}
              alt="BluBox Exports"
              className="w-32 h-full object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    relative px-5 py-5 font-body font-bold uppercase tracking-widest text-[11px]
                    transition-colors duration-200 border-b-2
                    ${
                      active
                        ? "text-navy border-gold"
                        : "text-foreground border-transparent hover:text-navy hover:border-gold"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:block btn-primary text-xs py-2.5 px-5"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border-subtle bg-white">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block px-6 py-4 font-body font-bold uppercase tracking-widest text-[11px]
                    border-b border-border-subtle transition-colors duration-200
                    ${active ? "text-gold bg-industrial-grey" : "text-foreground hover:bg-industrial-grey"}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="p-4">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary block text-center text-xs py-3"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
