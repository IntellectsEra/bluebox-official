import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const BLOGS = [
  {
    date: "March 10, 2026",
    category: "Industry",
    title: "The Rise of Stainless Steel Hardware in Indian Architecture",
    excerpt: "As modern construction projects increasingly demand durability and aesthetics, SS 304 grade hardware has become the preferred choice for architects and builders across India.",
    readTime: "4 min read",
  },
  {
    date: "February 18, 2026",
    category: "Export Guide",
    title: "How to Source Premium Hardware for Export Projects",
    excerpt: "Understanding MOQ, grade certifications, and packaging standards is essential for any hardware import-export business. Here's what international buyers need to know.",
    readTime: "5 min read",
  },
  {
    date: "January 25, 2026",
    category: "Product Guide",
    title: "Mortise Locks vs. Cylindrical Locks — What's Right for Your Project?",
    excerpt: "Both lock types serve different purposes. We break down the technical differences, applications, and cost factors to help you make the right specification decision.",
    readTime: "6 min read",
  },
  {
    date: "January 8, 2026",
    category: "Tips",
    title: "5 Things to Check Before Buying SS Hinges in Bulk",
    excerpt: "From grade verification to finish quality and load capacity — here are the five most critical quality checks before placing a large order for SS hinges.",
    readTime: "3 min read",
  },
  {
    date: "December 15, 2025",
    category: "Industry",
    title: "Cabinet Hardware Trends for 2026: What Interior Designers Are Specifying",
    excerpt: "From matte black to antique gold, cabinet handle finishes are shifting. We explore the dominant trends shaping interior hardware specifications this year.",
    readTime: "4 min read",
  },
  {
    date: "November 28, 2025",
    category: "Company",
    title: "BluBox Exports Marks 13 Years of Manufacturing Excellence",
    excerpt: "From a small retail outlet in Chennai to an international hardware exporter — we look back at our journey and what continues to drive us forward.",
    readTime: "3 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(200,169,106,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(200,169,106,0.5) 40px)"
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label text-gold mb-3">Knowledge Centre</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
            Insights & Industry News
          </h1>
          <p className="font-body text-white/60">
            Hardware expertise, export guides, and product knowledge from Chennai's leading manufacturer.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy font-bold">Blogs</span>
          </nav>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-[8vh] bg-industrial-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOGS.map((blog, i) => (
              <article
                key={i}
                className="bg-white border border-border-subtle shadow-card hover:border-gold transition-colors duration-250 animate-slide-up flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Category Bar */}
                <div className="bg-navy px-4 py-2">
                  <span className="font-body font-bold uppercase tracking-widest text-[10px] text-gold">{blog.category}</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-foreground/40 font-body text-xs mb-3 uppercase tracking-wide">
                    <Calendar size={11} />
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h2 className="font-display text-xl font-semibold text-navy leading-tight mb-3">
                    {blog.title}
                  </h2>

                  <p className="font-body text-foreground/60 text-sm leading-relaxed mb-5 flex-1">
                    {blog.excerpt}
                  </p>

                  <button className="flex items-center gap-2 font-body font-bold uppercase tracking-widest text-[10px] text-navy border-b border-navy pb-0.5 w-fit hover:text-gold hover:border-gold transition-colors duration-200">
                    Read More
                    <ArrowRight size={11} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
