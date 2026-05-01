import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogBySlug, getRelatedBlogs, type BlogBlock } from "@/data/blogs";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-12 mb-4 leading-tight">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-xl md:text-2xl font-semibold text-navy mt-8 mb-3 leading-snug">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="font-body text-foreground/80 text-[17px] leading-[1.8] mb-5">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 font-body text-foreground/80 text-[17px] leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 bg-gold shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-gold bg-industrial-grey px-6 py-5">
          <p className="font-display text-xl md:text-2xl italic text-navy leading-snug">
            "{block.text}"
          </p>
        </blockquote>
      );
    case "image":
      return (
        <figure className="my-8">
          <img src={block.src} alt={block.caption ?? ""} className="w-full" loading="lazy" />
          {block.caption && (
            <figcaption className="font-body text-xs uppercase tracking-widest text-foreground/50 mt-3 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) return <Navigate to="/blog" replace />;

  const related = getRelatedBlogs(blog.slug, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-navy">
        <div className="absolute inset-0">
          <img
            src={blog.cover}
            alt={blog.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body font-bold uppercase tracking-widest text-[10px] text-gold hover:text-gold-light transition-colors mb-6"
          >
            <ArrowLeft size={12} />
            Back to Blogs
          </Link>

          <div className="inline-block bg-gold text-navy px-3 py-1 mb-5">
            <span className="font-body font-bold uppercase tracking-widest text-[10px]">
              {blog.category}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">
            {blog.title}
          </h1>

          <p className="font-body text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 font-body text-xs uppercase tracking-widest border-t border-white/15 pt-5">
            <span className="flex items-center gap-2"><User size={12} className="text-gold" />{blog.author}</span>
            <span className="flex items-center gap-2"><Calendar size={12} className="text-gold" />{blog.date}</span>
            <span className="flex items-center gap-2"><Clock size={12} className="text-gold" />{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* ─── Breadcrumb ───────────────────────────────────── */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-navy font-bold truncate max-w-[200px] md:max-w-md">{blog.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── Cover Image ──────────────────────────────────── */}
      <section className="bg-industrial-grey py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-l-4 border-gold shadow-card overflow-hidden">
            <img
              src={blog.cover}
              alt={blog.title}
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ─── Article Body ─────────────────────────────────── */}
      <article className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          {blog.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Share */}
          <div className="mt-14 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-body uppercase tracking-widest text-[10px] font-bold text-foreground/60">
              <Share2 size={12} className="text-gold" />
              Share this article
            </div>
            <Link
              to="/contact"
              className="btn-primary text-xs py-2.5 px-5 inline-flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </article>

      {/* ─── Related Posts ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-industrial-grey py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="section-label text-gold mb-3">Continue Reading</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-10">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((b) => (
                <Link
                  to={`/blog/${b.slug}`}
                  key={b.slug}
                  className="group bg-white border border-border-subtle shadow-card hover:border-gold transition-colors duration-250 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={b.cover}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-navy px-4 py-2">
                    <span className="font-body font-bold uppercase tracking-widest text-[10px] text-gold">
                      {b.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold text-navy leading-tight mb-2 group-hover:text-gold transition-colors">
                      {b.title}
                    </h3>
                    <p className="font-body text-foreground/60 text-sm leading-relaxed line-clamp-3 flex-1">
                      {b.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-body font-bold uppercase tracking-widest text-[10px] text-navy group-hover:text-gold transition-colors">
                      Read More <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
