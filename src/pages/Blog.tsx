import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { BLOGS } from "@/data/blogs";

export default function Blog() {
  const [featured, ...rest] = BLOGS;

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

      {/* Featured Post */}
      {featured && (
        <section className="bg-industrial-grey py-12">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-white border border-border-subtle shadow-card hover:border-gold transition-colors duration-250 overflow-hidden"
            >
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold text-navy px-2.5 py-1 font-body font-bold uppercase tracking-widest text-[10px]">
                    Featured
                  </span>
                  <span className="font-body font-bold uppercase tracking-widest text-[10px] text-foreground/50">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-semibold text-navy leading-tight mb-4 group-hover:text-gold transition-colors">
                  {featured.title}
                </h2>
                <p className="font-body text-foreground/70 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-foreground/50 font-body text-xs uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5"><Calendar size={11} />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11} />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 font-body font-bold uppercase tracking-widest text-[10px] text-navy border-b border-navy pb-0.5 w-fit group-hover:text-gold group-hover:border-gold transition-colors">
                  Read Article <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-[8vh] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="section-label text-gold mb-2">Latest Articles</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy">
              Browse All Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((blog, i) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={blog.slug}
                className="group bg-white border border-border-subtle shadow-card hover:border-gold transition-colors duration-250 animate-slide-up flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
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

                  <h2 className="font-display text-xl font-semibold text-navy leading-tight mb-3 group-hover:text-gold transition-colors">
                    {blog.title}
                  </h2>

                  <p className="font-body text-foreground/60 text-sm leading-relaxed mb-5 flex-1">
                    {blog.excerpt}
                  </p>

                  <span className="flex items-center gap-2 font-body font-bold uppercase tracking-widest text-[10px] text-navy border-b border-navy pb-0.5 w-fit group-hover:text-gold group-hover:border-gold transition-colors duration-200">
                    Read More
                    <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
