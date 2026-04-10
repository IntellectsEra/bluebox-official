import {  Globe, Award, Layers, BadgeCheck } from "lucide-react";
import aboutFactoryImg from "@/assets/about-factory.jpg";
import factoryFloorImg from "@/assets/factory-floor.jpg";
import exportShippingImg from "@/assets/export-shipping.jpg";
import interiorShowcaseImg from "@/assets/interior-showcase.jpg";

const COMMITMENTS = [
  {
    icon: <Award size={28} className="text-gold" />,
    title: "Building Trust Since 2012",
    desc: "From a local retail store to an international supplier, our journey is built on reliability, consistent service, and long-term relationships.",
    img: factoryFloorImg,
    tag: "Quality",
  },
  {
    icon: <Layers size={28} className="text-gold" />,
    title: "Premium Product Range",
    desc: "BluBox Exports — our global business arm — connects the quality and reliability of Indian hardware with international markets.",
    img: aboutFactoryImg,
    tag: "Delivery",
  },
  {
    icon: <Globe size={28} className="text-gold" />,
    title: "Global Reach, Local Values",
    desc: "With a growing export network, we deliver Indian-made hardware worldwide while maintaining consistent quality and strong service values.",
    img: exportShippingImg,
    tag: "Partnerships",
  },
  {
    icon: <BadgeCheck size={28} className="text-gold" />,
    title: "White Label & Custom Solutions",
    desc: "From OEM partnerships to customized branding, we provide flexible and scalable hardware solutions tailored to diverse market needs.",
    img: interiorShowcaseImg,
    tag: "Supply",
  },
];

function GeoBg({ index }: { index: number }) {
  const patterns = [
    // Card 0 — rotated squares + diagonal line
    <svg
      key={0}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="260" y="-40" width="220" height="220"
        fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1"
        transform="rotate(20 370 70)"
      />
      <rect
        x="280" y="-20" width="180" height="180"
        fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1"
        transform="rotate(20 370 70)"
      />
      <circle cx="340" cy="40" r="90"
        fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="40"
      />
      <line x1="0" y1="300" x2="200" y2="0"
        stroke="rgba(212,175,55,0.05)" strokeWidth="1"
      />
    </svg>,

    // Card 1 — concentric circles + rays
    <svg
      key={1}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="350" cy="-30" r="140"
        fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1"
      />
      <circle cx="350" cy="-30" r="100"
        fill="none" stroke="rgba(212,175,55,0.09)" strokeWidth="1"
      />
      <circle cx="350" cy="-30" r="60"
        fill="rgba(212,175,55,0.05)" stroke="none"
      />
      <line x1="210" y1="0" x2="400" y2="300"
        stroke="rgba(26,26,46,0.04)" strokeWidth="1"
      />
      <line x1="180" y1="0" x2="400" y2="260"
        stroke="rgba(26,26,46,0.03)" strokeWidth="1"
      />
    </svg>,

    // Card 2 — rotated squares bottom-left
    <svg
      key={2}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-40" y="80" width="200" height="200"
        fill="none" stroke="rgba(212,175,55,0.10)" strokeWidth="1"
        transform="rotate(-15 60 180)"
      />
      <rect
        x="-20" y="100" width="160" height="160"
        fill="none" stroke="rgba(212,175,55,0.07)" strokeWidth="1"
        transform="rotate(-15 60 180)"
      />
      <circle cx="60" cy="260" r="70"
        fill="rgba(212,175,55,0.04)" stroke="none"
      />
    </svg>,

    // Card 3 — diagonal lines + concentric circles bottom-left
    <svg
      key={3}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="0" x2="400" y2="300"
        stroke="rgba(212,175,55,0.06)" strokeWidth="1"
      />
      <line x1="60" y1="0" x2="400" y2="240"
        stroke="rgba(212,175,55,0.05)" strokeWidth="1"
      />
      <circle cx="60" cy="260" r="160"
        fill="none" stroke="rgba(212,175,55,0.10)" strokeWidth="1"
      />
      <circle cx="60" cy="260" r="110"
        fill="none" stroke="rgba(212,175,55,0.07)" strokeWidth="1"
      />
      <circle cx="60" cy="260" r="60"
        fill="rgba(212,175,55,0.05)" stroke="none"
      />
    </svg>,
  ];

  return patterns[index] ?? null;
}

export default function Commitments() {
  return (
    <section className="bg-[#F7F4EF]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {COMMITMENTS.map((item, i) => {
          const isDark = i === 0 || i === 3;
          return (
            <div
              key={i}
              className={`relative overflow-hidden animate-slide-up ${
                isDark ? "bg-[#1A1A2E]" : "bg-white border border-[#E5DDD0]"
              }`}
              style={{ animationDelay: `${i * 80}ms`, minHeight: "300px" }}
            >
              {/* Geometric background */}
              <GeoBg index={i} />

              {/* Ghost number */}
              <span
                className={`absolute top-6 right-7 font-display text-7xl font-semibold select-none pointer-events-none leading-none ${
                  isDark ? "text-[#D4AF37]/10" : "text-[#1A1A2E]/[0.06]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div
                className="relative z-10 p-8 flex flex-col justify-end h-full"
                style={{ minHeight: "300px" }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    isDark
                      ? "bg-[#D4AF37]/15 border border-[#D4AF37]/40"
                      : "bg-[#FDF8EE] border border-[#D4AF37]"
                  }`}
                >
                  <span className={isDark ? "text-[#D4AF37]" : "text-[#B8860B]"}>
                    {item.icon}
                  </span>
                </div>

                {/* Tag */}
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 mb-3 w-fit ${
                    isDark
                      ? "bg-[#D4AF37]/15 text-[#D4AF37]"
                      : "bg-[#FDF8EE] text-[#B8860B]"
                  }`}
                >
                  {item.tag}
                </span>

                {/* Gold divider */}
                <div className="w-7 h-0.5 bg-[#D4AF37] mb-3" />

                <h3
                  className={`font-body font-bold text-lg leading-snug mb-2 ${
                    isDark ? "text-white" : "text-[#1A1A2E]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed ${
                    isDark ? "text-white/55" : "text-[#777]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}