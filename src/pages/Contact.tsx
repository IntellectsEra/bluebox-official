import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Phone, Mail, MapPin, Plus, Trash2, CheckCircle } from "lucide-react";

interface ProductRow {
  productName: string;
  moq: string;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [productRows, setProductRows] = useState<ProductRow[]>([
    { productName: preselectedProduct, moq: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedProduct) {
      setProductRows([{ productName: preselectedProduct, moq: "" }]);
    }
  }, [preselectedProduct]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s+]/g, "").replace(/^91/, ""))) {
      errs.phone = "Enter valid Indian mobile number";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const addRow = () => {
    setProductRows([...productRows, { productName: "", moq: "" }]);
  };

  const removeRow = (i: number) => {
    setProductRows(productRows.filter((_, idx) => idx !== i));
  };

  const updateRow = (i: number, field: keyof ProductRow, value: string) => {
    setProductRows(productRows.map((r, idx) => idx === i ? { ...r, [field]: value } : r));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(200,169,106,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(200,169,106,0.5) 40px)"
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="section-label text-gold mb-3">Get In Touch</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="font-body text-gold font-bold uppercase tracking-widest text-sm mb-3">
            Premium Fittings for Every Need, Built to Last
          </p>
          <p className="font-body text-white/60 max-w-xl leading-relaxed">
            Discover a wide range of high-quality hinges, handles, and locks. Durable, functional, and stylish fittings crafted to meet global standards.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border-subtle py-3">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="font-body text-xs text-foreground/50 flex items-center gap-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-navy font-bold">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="py-[8vh] bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Info */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="section-divider mb-3 justify-start">
                <span className="section-label">Our Details</span>
              </div>
              <h2 className="font-display text-3xl font-semibold text-navy mb-6">
                Reach Us Directly
              </h2>
              <div className="w-10 h-0.5 bg-gold mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 border border-border-subtle shadow-card">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-body font-bold uppercase tracking-widest text-[10px] text-navy mb-1">Office Address</div>
                    <address className="not-italic font-body text-sm text-foreground/70 leading-relaxed">
                      No.39, Ground Floor,<br />
                      Ambedkar Street,<br />
                      Aparna Nagar, Ayappakkam,<br />
                      Chennai – 600077,<br />
                      Tamil Nadu, India
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-border-subtle shadow-card">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-body font-bold uppercase tracking-widest text-[10px] text-navy mb-1">Phone</div>
                    <a href="tel:+919884411134" className="font-body text-sm text-foreground/70 hover:text-gold transition-colors">
                      +91 98844 11134
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-border-subtle shadow-card">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-body font-bold uppercase tracking-widest text-[10px] text-navy mb-1">Email</div>
                    <a href="mailto:enquiry@bluboxexports.com" className="font-body text-sm text-foreground/70 hover:text-gold transition-colors">
                      enquiry@bluboxexports.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 animate-slide-up animate-slide-up-delay-2">
              {submitted ? (
                <div className="border-2 border-gold bg-white p-12 text-center shadow-hard-gold">
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-display text-3xl text-navy mb-3">Enquiry Received!</h3>
                  <p className="font-body text-foreground/65 text-base leading-relaxed">
                    Thank you! Our team will contact you shortly to discuss your requirements.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary text-sm mt-6"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="border border-border-subtle bg-white shadow-hard">
                  <div className="bg-navy px-6 py-4">
                    <h3 className="font-body font-bold uppercase tracking-widest text-white text-sm">
                      Send Your Enquiry
                    </h3>
                  </div>
                  <div className="p-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        maxLength={100}
                      />
                      {errors.name && <p className="text-red-600 font-body text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          maxLength={255}
                        />
                        {errors.email && <p className="text-red-600 font-body text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="form-label">Phone (India) *</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          maxLength={15}
                        />
                        {errors.phone && <p className="text-red-600 font-body text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Products & MOQ */}
                    <div>
                      <label className="form-label">Products & Minimum Order Quantity</label>
                      <div className="space-y-3">
                        {productRows.map((row, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <div className="flex-1">
                              <select
                                className="form-input text-sm"
                                value={row.productName}
                                onChange={(e) => updateRow(i, "productName", e.target.value)}
                              >
                                <option value="">— Select Product —</option>
                                {products.map((p) => (
                                  <option key={p.id} value={p.name}>{p.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="w-28 shrink-0">
                              <input
                                type="number"
                                className="form-input text-sm"
                                placeholder="MOQ"
                                value={row.moq}
                                onChange={(e) => updateRow(i, "moq", e.target.value)}
                                min="1"
                              />
                            </div>
                            {productRows.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeRow(i)}
                                className="w-10 h-10 shrink-0 bg-red-50 border border-red-200 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors"
                              >
                                <Trash2 size={14} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={addRow}
                        className="mt-3 flex items-center gap-2 font-body font-bold uppercase tracking-widest text-[10px] text-navy border border-navy px-3 py-2 hover:bg-navy hover:text-white transition-colors duration-200"
                      >
                        <Plus size={12} />
                        Add Another Product
                      </button>
                    </div>

                    <button type="submit" className="btn-primary w-full text-sm py-3.5">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
