import blogSsHardware from "@/assets/blog-ss-hardware.jpg";
import blogExport from "@/assets/blog-export.jpg";
import blogLocks from "@/assets/blog-locks.jpg";
import blogHinges from "@/assets/blog-hinges.jpg";
import blogCabinet from "@/assets/blog-cabinet.jpg";
import blogCompany from "@/assets/blog-company.jpg";

/**
 * Blog content schema.
 * To add a new blog: append a new entry below. Content is a list of typed blocks.
 *
 * Block types:
 *  - { type: "p", text }                — paragraph
 *  - { type: "h2", text }               — section heading
 *  - { type: "h3", text }               — sub-heading
 *  - { type: "list", items: string[] }  — bulleted list (use **bold** for inline emphasis if needed)
 *  - { type: "quote", text }            — pull-quote / callout
 *  - { type: "image", src, caption? }   — inline image
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; caption?: string };

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  content: BlogBlock[];
};

export const BLOGS: Blog[] = [
  {
    slug: "rise-of-stainless-steel-hardware-indian-architecture",
    title: "The Rise of Stainless Steel Hardware in Indian Architecture",
    excerpt:
      "As modern construction projects increasingly demand durability and aesthetics, SS 304 grade hardware has become the preferred choice for architects and builders across India.",
    category: "Industry",
    date: "March 10, 2026",
    readTime: "6 min read",
    author: "BluBox Editorial",
    cover: blogSsHardware,
    content: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text: "In recent years, stainless steel hardware has become a defining element in modern Indian architecture. From luxury residences to commercial buildings, architects and builders increasingly prefer stainless steel fittings for their durability, corrosion resistance, and contemporary aesthetics.",
      },
      {
        type: "p",
        text: "With India's construction industry rapidly expanding, the demand for high-quality architectural hardware such as stainless steel hinges, door handles, locks, and window fittings is growing significantly. Stainless steel hardware is no longer just a functional component—it has become a critical design and performance element in modern buildings.",
      },
      {
        type: "p",
        text: "This article explores why stainless steel hardware is rising in popularity across Indian architecture and how it is shaping the future of construction hardware.",
      },

      { type: "h2", text: "Why Stainless Steel Hardware Is Gaining Popularity in India" },
      { type: "h3", text: "1. Exceptional Durability and Strength" },
      {
        type: "p",
        text: "One of the biggest advantages of stainless steel hardware is its outstanding durability. Unlike traditional materials such as mild steel or aluminum, stainless steel offers:",
      },
      { type: "list", items: ["High tensile strength", "Long product lifespan", "Resistance to wear and tear"] },
      {
        type: "p",
        text: "Architects and construction professionals prefer stainless steel door hardware and window fittings because they can withstand heavy daily usage in both residential and commercial spaces.",
      },

      { type: "h3", text: "2. Superior Corrosion Resistance" },
      {
        type: "p",
        text: "India's climate varies widely, from humid coastal regions to heavy rainfall zones. Stainless steel hardware performs exceptionally well in these environments due to its natural corrosion resistance.",
      },
      { type: "p", text: "This makes it ideal for applications such as:" },
      {
        type: "list",
        items: [
          "Stainless steel door hinges",
          "Window fittings",
          "Exterior architectural hardware",
          "Marine and coastal construction projects",
        ],
      },
      {
        type: "quote",
        text: "Builders often select SS304 and SS316 grade stainless steel hardware for projects where moisture and environmental exposure are significant concerns.",
      },

      { type: "h3", text: "3. Modern Aesthetic Appeal" },
      {
        type: "p",
        text: "Modern Indian architecture emphasizes minimalist and premium interior design, and stainless steel complements this trend perfectly.",
      },
      { type: "p", text: "Architectural benefits include:" },
      {
        type: "list",
        items: [
          "Sleek metallic finish",
          "Compatibility with glass, wood, and aluminum doors",
          "Contemporary design aesthetics",
        ],
      },
      {
        type: "p",
        text: "Products like stainless steel door handles, cabinet handles, and architectural fittings add a sophisticated and modern look to residential and commercial spaces.",
      },

      { type: "h2", text: "Applications of Stainless Steel Hardware in Modern Buildings" },
      { type: "h3", text: "Door Hardware" },
      { type: "p", text: "Door fittings remain one of the most important uses of stainless steel hardware. Common products include:" },
      {
        type: "list",
        items: ["Stainless steel hinges", "Mortise locks", "Door handles", "Tower bolts", "Door stoppers"],
      },
      { type: "p", text: "These fittings ensure smooth operation, security, and long-term durability." },

      { type: "h3", text: "Window Hardware" },
      { type: "p", text: "Modern window systems require high-quality fittings for stability and functionality. Stainless steel window hardware includes:" },
      { type: "list", items: ["Window hinges", "Sliding window rollers", "Locking systems", "Window handles"] },

      { type: "h3", text: "Furniture and Cabinet Hardware" },
      { type: "p", text: "Stainless steel is also widely used in furniture hardware, particularly in kitchens and wardrobes. Popular applications include:" },
      { type: "list", items: ["Cabinet handles", "Drawer pulls", "Soft-close fittings", "Kitchen accessories"] },
      { type: "p", text: "The corrosion resistance of stainless steel makes it especially suitable for kitchen and bathroom environments." },

      { type: "h2", text: "Growth of Stainless Steel Hardware Manufacturing in India" },
      { type: "p", text: "India has become a major hub for stainless steel hardware manufacturing and exports. Several factors contribute to this growth:" },
      { type: "h3", text: "Strong Manufacturing Infrastructure" },
      { type: "p", text: "Indian manufacturers combine advanced machining technology with skilled craftsmanship to produce high-quality architectural hardware." },
      { type: "h3", text: "Competitive Pricing" },
      { type: "p", text: "Compared to many global markets, Indian manufacturers offer cost-effective stainless steel hardware without compromising quality." },
      { type: "h3", text: "Export Opportunities" },
      { type: "p", text: "Many Indian hardware manufacturers now supply products to:" },
      { type: "list", items: ["USA", "Europe", "Middle East", "Southeast Asia"] },

      { type: "h2", text: "How Architects Choose the Right Stainless Steel Hardware" },
      { type: "h3", text: "Material Grade" },
      { type: "list", items: ["SS304 — Ideal for indoor architectural applications", "SS316 — Suitable for coastal or high-moisture environments"] },
      { type: "h3", text: "Load Capacity" },
      { type: "p", text: "Heavy doors require high-strength stainless steel hinges capable of supporting significant weight." },
      { type: "h3", text: "Finish and Design" },
      { type: "list", items: ["Satin finish", "Mirror polish", "Matte brushed steel"] },

      { type: "h2", text: "Sustainability and Environmental Benefits" },
      { type: "p", text: "Sustainability is becoming a major focus in construction, and stainless steel supports environmentally responsible architecture. Key sustainability advantages include:" },
      { type: "list", items: ["100% recyclable material", "Long product lifespan", "Reduced maintenance and replacement"] },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "The rise of stainless steel hardware in Indian architecture reflects the industry's shift toward durable, secure, and aesthetically refined construction materials. As demand continues to grow domestically and internationally, Indian manufacturers are playing a crucial role in supplying high-quality stainless steel architectural hardware for global construction projects." },
    ],
  },

  {
    slug: "how-to-source-premium-hardware-for-export-projects",
    title: "How to Source Premium Hardware for Export Projects",
    excerpt:
      "Understanding MOQ, grade certifications, and packaging standards is essential for any hardware import-export business. Here's what international buyers need to know.",
    category: "Export Guide",
    date: "February 18, 2026",
    readTime: "7 min read",
    author: "BluBox Editorial",
    cover: blogExport,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "In global construction and interior development projects, selecting the right architectural hardware supplier is critical for long-term performance and project success. Premium hardware components such as stainless steel hinges, door handles, mortise locks, cabinet fittings, and window hardware directly impact durability, security, and design quality." },
      { type: "p", text: "For international buyers, sourcing premium hardware for export projects requires a strategic approach that includes evaluating manufacturing quality, compliance standards, supplier reliability, and export logistics." },
      { type: "quote", text: "India has emerged as one of the leading hubs for architectural hardware manufacturing and export, offering competitive pricing, advanced manufacturing capabilities, and a wide range of premium hardware solutions." },

      { type: "h2", text: "Why Premium Hardware Matters in Export Projects" },
      { type: "p", text: "High-quality hardware plays a vital role in maintaining the structural integrity and functionality of buildings. Poor-quality fittings can lead to frequent maintenance issues, safety risks, and reduced product lifespan." },
      { type: "p", text: "Premium hardware offers several advantages:" },
      { type: "list", items: ["Long-lasting durability in high-traffic environments", "Superior corrosion resistance in different climates", "Enhanced security through reliable locking systems", "Modern architectural aesthetics"] },

      { type: "h2", text: "Key Types of Hardware Used in Export Projects" },
      { type: "h3", text: "1. Stainless Steel Hinges" },
      { type: "p", text: "Hinges are essential for door stability and smooth movement. Premium stainless steel hinges provide:" },
      { type: "list", items: ["High load-bearing capacity", "Rust resistance", "Long service life"] },
      { type: "p", text: "SS304 and SS316 hinges are widely used in commercial buildings, residential projects, and hospitality properties." },

      { type: "h3", text: "2. Door Handles and Pull Handles" },
      { type: "p", text: "Door handles are both functional and decorative elements in modern architecture. High-quality handles provide:" },
      { type: "list", items: ["Ergonomic design", "Smooth operation", "Durable finishes such as satin or brushed steel"] },

      { type: "h3", text: "3. Mortise Locks and Security Hardware" },
      { type: "p", text: "Security hardware is crucial in residential and commercial construction. Premium locking systems offer:" },
      { type: "list", items: ["Enhanced security features", "Reliable locking mechanisms", "Compatibility with modern door designs"] },

      { type: "h3", text: "4. Cabinet and Furniture Hardware" },
      { type: "p", text: "Kitchen cabinets, wardrobes, and furniture require durable hardware components such as:" },
      { type: "list", items: ["Cabinet handles", "Drawer pulls", "Soft-close fittings", "Kitchen accessories"] },

      { type: "h2", text: "Step-by-Step Guide to Sourcing Premium Hardware for Export" },
      { type: "h3", text: "1. Identify Reliable Hardware Manufacturers" },
      { type: "p", text: "Look for companies that offer consistent product quality, large manufacturing capacity, and global shipping experience. Working with established exporters like BluBox Exports ensures access to high-quality architectural hardware for international markets." },

      { type: "h3", text: "2. Evaluate Product Quality and Materials" },
      { type: "p", text: "Premium hardware typically uses:" },
      { type: "list", items: ["Stainless steel (SS304 / SS316)", "Brass or zinc alloy", "High-grade aluminum components"] },

      { type: "h3", text: "3. Check Certifications and Industry Standards" },
      { type: "list", items: ["ISO manufacturing standards", "CE compliance for European markets", "Quality testing certifications"] },

      { type: "h3", text: "4. Assess Product Range and Customization" },
      { type: "p", text: "A comprehensive product range may include hinges, mortise locks, handles, tower bolts, cabinet hardware and window fittings. Suppliers who offer OEM manufacturing can help importers build private-label hardware brands." },

      { type: "h3", text: "5. Evaluate Export Logistics and Packaging" },
      { type: "list", items: ["Export-ready packaging", "Container optimization", "Global shipping coordination", "Export documentation"] },

      { type: "h2", text: "Why India Is a Preferred Source for Hardware Exports" },
      { type: "p", text: "India has become a global manufacturing hub for architectural hardware and building fittings. Key advantages include competitive manufacturing costs, skilled engineering and craftsmanship, and strong export infrastructure serving the United States, Europe, Middle East, and Southeast Asia." },
    ],
  },

  {
    slug: "mortise-locks-vs-cylindrical-locks",
    title: "Mortise Locks vs. Cylindrical Locks — What's Right for Your Project?",
    excerpt:
      "Both lock types serve different purposes. We break down the technical differences, applications, and cost factors to help you make the right specification decision.",
    category: "Product Guide",
    date: "January 25, 2026",
    readTime: "6 min read",
    author: "BluBox Editorial",
    cover: blogLocks,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "When selecting door locking systems for residential, commercial, or export construction projects, the choice between mortise locks and cylindrical locks is one of the most important decisions architects, builders, and hardware buyers must make." },
      { type: "p", text: "Both locking systems serve the same purpose—door security and access control—but they differ significantly in design, durability, installation, and performance." },

      { type: "h2", text: "What Is a Mortise Lock?" },
      { type: "p", text: "A mortise lock is a heavy-duty locking system installed inside a pocket (called a mortise) cut into the door. These locks are widely used in commercial buildings, luxury homes, hotels, and high-security environments." },
      { type: "h3", text: "Key Features of Mortise Locks" },
      { type: "list", items: ["Installed inside the door body", "Multiple internal locking components", "Higher security level", "Long product lifespan", "Suitable for heavy doors"] },

      { type: "h2", text: "What Is a Cylindrical Lock?" },
      { type: "p", text: "A cylindrical lock is one of the most common door locking systems used in residential buildings. Installed through a simple cylindrical hole drilled through the door, making it faster and easier to install compared to mortise locks." },
      { type: "h3", text: "Key Features of Cylindrical Locks" },
      { type: "list", items: ["Simple installation process", "Cost-effective locking solution", "Widely used in residential doors", "Easy replacement and maintenance"] },

      { type: "h2", text: "Mortise Locks vs Cylindrical Locks: Key Differences" },
      { type: "h3", text: "1. Security Level" },
      { type: "p", text: "Mortise Locks: Multi-point locking mechanism, strong internal components, higher resistance to forced entry." },
      { type: "p", text: "Cylindrical Locks: Basic locking mechanism, lower security, suitable for low to moderate security needs." },
      { type: "quote", text: "For projects requiring maximum door security, mortise locks are generally the preferred choice." },

      { type: "h3", text: "2. Durability and Lifespan" },
      { type: "p", text: "Mortise locks are designed for heavy-duty usage and high-traffic areas such as commercial buildings, hotels, and offices. Cylindrical locks are typically better suited for lighter residential use." },

      { type: "h3", text: "3. Installation Complexity" },
      { type: "p", text: "Mortise Locks require a pocket to be cut inside the door — more complex installation, usually by professionals. Cylindrical Locks install through a standard drilled hole — faster and lower labor cost." },

      { type: "h3", text: "4. Design and Aesthetic Appeal" },
      { type: "p", text: "Mortise locks allow greater flexibility in architectural hardware design. They are often paired with premium door handles, decorative escutcheons, and stainless steel architectural hardware." },

      { type: "h2", text: "When Should You Choose a Mortise Lock?" },
      { type: "list", items: ["High security doors", "Commercial or hospitality buildings", "Heavy wooden or metal doors", "Premium architectural hardware installations"] },

      { type: "h2", text: "When Should You Choose a Cylindrical Lock?" },
      { type: "list", items: ["Residential homes", "Apartment interior doors", "Office cabins", "Budget-sensitive projects"] },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Mortise locks offer superior durability, advanced security, and premium design compatibility, making them ideal for commercial and high-end construction projects. Cylindrical locks provide cost-effective and easy installation solutions, making them suitable for residential and interior door applications." },
    ],
  },

  {
    slug: "5-things-to-check-before-buying-ss-hinges-in-bulk",
    title: "5 Things to Check Before Buying SS Hinges in Bulk",
    excerpt:
      "From grade verification to finish quality and load capacity — here are the five most critical quality checks before placing a large order for SS hinges.",
    category: "Tips",
    date: "January 8, 2026",
    readTime: "5 min read",
    author: "BluBox Editorial",
    cover: blogHinges,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "When sourcing stainless steel (SS) hinges in bulk for construction or export projects, making the right purchase decision is critical. Hinges may seem like small hardware components, but they play a major role in door stability, safety, and long-term performance." },

      { type: "h2", text: "1. Verify the Stainless Steel Grade (SS304 vs SS316)" },
      { type: "h3", text: "SS304 Hinges" },
      { type: "list", items: ["Ideal for indoor applications", "Excellent corrosion resistance", "Widely used in residential and commercial projects"] },
      { type: "h3", text: "SS316 Hinges" },
      { type: "list", items: ["Superior corrosion resistance", "Suitable for coastal or humid environments", "Recommended for marine and outdoor projects"] },
      { type: "quote", text: "Always confirm the stainless steel composition with your supplier before placing large hardware orders." },

      { type: "h2", text: "2. Check Load-Bearing Capacity" },
      { type: "p", text: "Door hinges must support the weight and movement of the door throughout their lifespan. Before buying in bulk, evaluate:" },
      { type: "list", items: ["Maximum door weight supported", "Thickness of hinge material", "Number of hinges required per door"] },

      { type: "h2", text: "3. Evaluate Manufacturing Quality" },
      { type: "p", text: "When evaluating a hinge supplier, check for:" },
      { type: "list", items: ["Smooth hinge movement", "Accurate machining and finishing", "Strong welding and pin quality", "Uniform stainless steel thickness"] },

      { type: "h2", text: "4. Inspect Surface Finish and Corrosion Resistance" },
      { type: "list", items: ["Satin finish", "Brushed stainless steel", "Mirror polish"] },
      { type: "p", text: "For projects in coastal regions or humid climates, selecting hinges with enhanced anti-corrosion properties is essential." },

      { type: "h2", text: "5. Confirm Supplier Export Experience" },
      { type: "list", items: ["Consistent product quality", "Export-ready packaging", "Global shipping capabilities", "Large-scale manufacturing capacity"] },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "By checking these five key factors—steel grade, load-bearing capacity, manufacturing quality, surface finish, and supplier expertise—buyers can ensure they source hinges that deliver long-term durability and optimal door performance." },
    ],
  },

  {
    slug: "cabinet-hardware-trends-2026",
    title: "Cabinet Hardware Trends for 2026: What Interior Designers Are Specifying",
    excerpt:
      "From matte black to antique gold, cabinet handle finishes are shifting. We explore the dominant trends shaping interior hardware specifications this year.",
    category: "Industry",
    date: "December 15, 2025",
    readTime: "6 min read",
    author: "BluBox Editorial",
    cover: blogCabinet,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "In modern interior design, cabinet hardware is no longer just a functional detail — it's a defining design element. Interior designers increasingly treat cabinet handles, knobs, and pulls as the \"jewelry of the kitchen\", elevating cabinetry with materials, finishes, and textures that reflect the overall architectural style." },

      { type: "h2", text: "1. Warm Metal Finishes Are Dominating Modern Kitchens" },
      { type: "p", text: "Popular finishes designers are specifying include:" },
      { type: "list", items: ["Brushed brass", "Champagne bronze", "Satin gold", "Soft copper"] },
      { type: "p", text: "These finishes add warmth and sophistication while pairing well with both light and dark cabinetry." },

      { type: "h2", text: "2. Mixed-Metal Hardware Is Becoming a Major Design Statement" },
      { type: "p", text: "In 2026, designers are intentionally mixing metals such as:" },
      { type: "list", items: ["Brass + matte black", "Nickel + bronze", "Stainless steel + champagne gold"] },

      { type: "h2", text: "3. Slim and Elongated Pull Handles" },
      { type: "list", items: ["Long bar handles", "Slim linear pulls", "Minimal profile handles"] },
      { type: "p", text: "These designs work particularly well with modern cabinetry and handleless kitchen concepts." },

      { type: "h2", text: "4. Textured and Knurled Hardware Finishes" },
      { type: "list", items: ["Knurled cabinet handles", "Hammered metal knobs", "Brushed or patinated finishes"] },

      { type: "h2", text: "5. Living Finishes and Natural Patina" },
      { type: "list", items: ["Unlacquered brass", "Aged bronze", "Oil-rubbed bronze"] },

      { type: "h2", text: "6. Sustainable and Eco-Friendly Hardware" },
      { type: "list", items: ["Recyclable metal materials", "Responsible sourcing", "Durable, long-lasting finishes"] },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "For architects, builders, and hardware buyers, selecting the right cabinet hardware is essential to creating interiors that combine functionality, durability, and timeless design." },
    ],
  },

  {
    slug: "blubox-exports-13-years-industry-excellence",
    title: "BluBox Exports Marks 13 Years of Industry Excellence",
    excerpt:
      "From a small retail outlet in Chennai to an international hardware exporter — we look back at our journey and what continues to drive us forward.",
    category: "Company",
    date: "November 28, 2025",
    readTime: "5 min read",
    author: "BluBox Editorial",
    cover: blogCompany,
    content: [
      { type: "h2", text: "Introduction" },
      { type: "p", text: "BluBox Exports, a leading exporter of architectural hardware and stainless steel fittings, proudly marks 13 years of excellence in the hardware industry. Based in Ayappakkam, Chennai, the company has built a strong reputation for delivering high-quality door hardware, cabinet fittings, and architectural accessories to global markets." },
      { type: "quote", text: "Founded and led by Mr. Srinivasan, who brings over 25 years of industry experience, BluBox Exports has grown into a trusted partner for international buyers, distributors, and construction professionals." },

      { type: "h2", text: "The Vision Behind BluBox Exports" },
      { type: "p", text: "BluBox Exports was established with a clear vision—to provide premium architectural hardware solutions that meet global standards. Under his leadership, the company has focused on:" },
      { type: "list", items: ["Delivering export-grade hardware products", "Maintaining strict quality control standards", "Building long-term partnerships with global buyers"] },

      { type: "h2", text: "25+ Years of Industry Expertise" },
      { type: "p", text: "With over two decades of experience in architectural hardware manufacturing and export, Mr. Srinivasan has gained deep insights into:" },
      { type: "list", items: ["Global construction hardware requirements", "International quality standards", "Manufacturing processes and material selection", "Export logistics and global supply chains"] },

      { type: "h2", text: "Wide Range of Architectural Hardware Products" },
      { type: "list", items: ["Stainless steel hinges", "Door handles and pull handles", "Mortise locks", "Tower bolts and aldrops", "Cabinet handles and furniture hardware", "Door stoppers and accessories"] },

      { type: "h2", text: "Commitment to Quality and Global Standards" },
      { type: "list", items: ["High-grade stainless steel materials", "Precision manufacturing processes", "Consistent product finishing", "Reliable packaging for international shipping"] },

      { type: "h2", text: "Strategic Location in Chennai's Industrial Hub" },
      { type: "p", text: "Located in Ayappakkam, Chennai, BluBox Exports benefits from access to one of India's major manufacturing and export hubs. Chennai's well-developed port infrastructure also supports BluBox Exports in serving international markets across the Middle East, Europe, and other global regions." },

      { type: "h2", text: "Looking Ahead: Expanding Global Reach" },
      { type: "list", items: ["Expanding international distribution networks", "Introducing new architectural hardware designs", "Strengthening global partnerships with builders and distributors"] },

      { type: "h2", text: "Conclusion" },
      { type: "p", text: "The 13-year journey of BluBox Exports reflects a story of dedication, expertise, and continuous growth in the architectural hardware industry. As BluBox Exports moves forward, its focus remains clear—providing reliable, high-quality hardware solutions that meet the evolving demands of global construction and interior design industries." },
    ],
  },
];

export const getBlogBySlug = (slug: string) => BLOGS.find((b) => b.slug === slug);
export const getRelatedBlogs = (slug: string, limit = 3) =>
  BLOGS.filter((b) => b.slug !== slug).slice(0, limit);
