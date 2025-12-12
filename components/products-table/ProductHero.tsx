import "./products.css";
import { ProductHeroProps } from "@/types/product";

export default function ProductHero({
  image,
  title,
  description,
  brochureUrl,
}: ProductHeroProps) {
  return (
    <section className="pt-12 pb-12">
      <div className="container mx-auto px-4">
        <div className="section-inner max-w-5xl mx-auto">
          <div className="product-hero-container">
            <div className="hero-image-container">
              <img src={image} alt={title} className="hero-image" />
              <div className="hero-shadow"></div>
            </div>

            <h1 className="hero-title">{title}</h1>

            <p className="hero-description">{description}</p>

            <div className="hero-buttons">
              <a href="/contact" className="contact-btn">
                Contact Us
              </a>

              <a href={brochureUrl} download className="brochure-btn">
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
