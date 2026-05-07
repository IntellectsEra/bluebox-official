import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowRight, FileText, MessageSquare } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  refNo: string;
  description: string;
  image: string;
  category: string;
}

export default function ProductCard({
  id,
  name,
  refNo,
  description,
  image,
  category,
}: ProductCardProps) {
  return (
    <Link to={`/products/info/${id}`}>
      <div className="product-card group flex flex-col h-full">
        {/* Image */}
        <div
          className="bg-white overflow-hidden border border-gray-100"
          style={{ aspectRatio: "1/1" }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
        </div>

        {/* Navy Name Bar */}
        <div className="bg-navy px-4 py-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-body font-bold text-sm uppercase tracking-wide truncate">
              {name}
            </h3>
            <span className="text-gold/70 font-body text-[10px] font-bold tracking-widest shrink-0 ml-2">
              Ref. {refNo}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-4 bg-white">
          <p className="text-foreground/70 font-body text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {description}
          </p>
          <div className="flex gap-2 mt-auto">
            <Link
              to={`/products/info/${id}`}
              className="flex items-center gap-1.5 flex-1 justify-center btn-primary text-[11px] py-2 px-3"
            >
              <ArrowRight size={12} />
              Know More
            </Link>
            <Link
              to={`/contact?product=${encodeURIComponent(name)}`}
              className="flex items-center gap-1.5 flex-1 justify-center btn-outline text-[11px] py-2 px-3"
            >
              <MessageSquare size={12} />
              Enquiry
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
