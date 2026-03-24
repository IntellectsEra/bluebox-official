export interface Product {
  id: number;
  name: string;
  refNo: string;
  description: string;
  image: string;
  images: string[];
  pdf: string;
  category:
    | "hinges"
    | "door-handles"
    | "cabinet-handles"
    | "mortise-lock"
    | "other";
  specs: { label: string; value: string }[];
  gallery?: string[];
}

export const CATEGORIES = [
  { value: "all", label: "All Products" },
  { value: "hinges", label: "Hinges" },
  { value: "door-handles", label: "Door Handles" },
  { value: "cabinet-handles", label: "Cabinet Handles" },
  { value: "mortise-lock", label: "Mortise Locks" },
  { value: "other", label: "Others" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Dead Lock",
    refNo: "BBX-001",
    description:
      "Heavy-duty dead lock providing maximum security for residential and commercial doors. Precision-engineered bolt mechanism for reliable, tamper-resistant locking.",
    image: "/products/1-1.jpg",
    images: [
      "/products/1-1.jpg",
      "/products/1-2.jpg",
      "/products/1-3.jpg",
      "/products/1-4.jpg",
    ],
    pdf: "/products/Dead Lock.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Security Doors",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 2,
    name: "CY Mortise Lock",
    refNo: "BBX-002",
    description:
      "Cylinder-based mortise lock offering reliable security and smooth operation. Suitable for a wide range of residential and commercial door applications.",
    image: "/products/2-1.jpg",
    images: [
      "/products/2-1.jpg",
      "/products/2-2.jpg",
      "/products/2-3.jpg",
      "/products/2-4.jpg",
    ],
    pdf: "/products/CY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 3,
    name: "Shelf Brackets",
    refNo: "BBX-003",
    description:
      "Sturdy stainless steel shelf brackets designed for secure wall-mounted shelving. Corrosion-resistant and capable of supporting heavy loads.",
    image: "/products/3-1.jpg",
    images: [
      "/products/3-1.jpg",
      "/products/3-2.jpg",
      "/products/3-3.jpg",
      "/products/3-4.jpg",
    ],
    pdf: "/products/Shelf Brackets.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS 304 / SS 202" },
      { label: "Finish", value: "Satin / Polished / Matt" },
      { label: "Sizes", value: '6", 8", 10", 12"' },
      {
        label: "Applications",
        value: "Wall Shelves, Kitchen, Retail Display, Office",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 4,
    name: "CY Mortise Lock",
    refNo: "BBX-004",
    description:
      "Cylinder-based mortise lock offering reliable security and smooth operation. Suitable for a wide range of residential and commercial door applications.",
    image: "/products/4-1.jpg",
    images: [
      "/products/4-1.jpg",
      "/products/4-2.jpg",
      "/products/4-3.jpg",
      "/products/4-4.jpg",
    ],
    pdf: "/products/CY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 5,
    name: "Brass Hinges",
    refNo: "BBX-005",
    description:
      "Classic brass hinges offering timeless aesthetics combined with long-lasting durability. Ideal for wooden doors, cabinets, and decorative furniture.",
    image: "/products/5-1.jpg",
    images: [
      "/products/5-1.jpg",
      "/products/5-2.jpg",
      "/products/5-3.jpg",
      "/products/5-4.jpg",
    ],
    pdf: "/products/Brass Hinges.pdf",
    category: "hinges",
    specs: [
      { label: "Material", value: "Brass" },
      { label: "Finish Method", value: "Polished / Lacquered / Antique" },
      {
        label: "Finish",
        value: "Polished Brass / Antique Brass / Satin Brass",
      },
      { label: "Sizes", value: '3", 4", 5", 6"' },
      {
        label: "Applications",
        value: "Wooden Doors, Cabinets, Furniture, Decorative Use",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 6,
    name: "KY Mortise Lock",
    refNo: "BBX-006",
    description:
      "Key-based mortise lock engineered for enhanced security and smooth bolt action. Built to suit both residential and commercial installations.",
    image: "/products/6-1.jpg",
    images: [
      "/products/6-1.jpg",
      "/products/6-2.jpg",
      "/products/6-3.jpg",
      "/products/6-4.jpg",
    ],
    pdf: "/products/KY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 7,
    name: "Door Stopper",
    refNo: "BBX-007",
    description:
      "Protective accessory designed to prevent door damage and wall impact. Durable rubber-tipped stop with stainless steel mounting.",
    image: "/products/7-1.jpg",
    images: [
      "/products/7-1.jpg",
      "/products/7-2.jpg",
      "/products/7-3.jpg",
      "/products/7-4.jpg",
    ],
    pdf: "/products/Door Stopper.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel + Rubber Tip" },
      { label: "Grade", value: "SS 202 / SS 304" },
      { label: "Finish", value: "Satin / Polished" },
      { label: "Applications", value: "All Door Types" },
      { label: "Min. Order Quantity", value: "200 Units" },
    ],
  },
  {
    id: 8,
    name: "F Bracket (for Glass)",
    refNo: "BBX-008",
    description:
      "Precision-engineered F-shaped bracket designed for secure glass panel mounting. Corrosion-resistant finish ensures longevity in both interior and exterior applications.",
    image: "/products/8-1.jpg",
    images: [
      "/products/8-1.jpg",
      "/products/8-2.jpg",
      "/products/8-3.jpg",
      "/products/8-4.jpg",
    ],
    pdf: "/products/F Bracket.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS 304" },
      { label: "Finish", value: "Satin / Polished / Matt" },
      { label: "Glass Thickness", value: "8mm / 10mm / 12mm" },
      {
        label: "Applications",
        value: "Glass Partitions, Shower Enclosures, Glass Railings",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 9,
    name: "Stud",
    refNo: "BBX-009",
    description:
      "High-strength stainless steel studs for structural and decorative fastening applications. Resistant to corrosion and built for long-term reliability.",
    image: "/products/9-1.jpg",
    images: [
      "/products/9-1.jpg",
      "/products/9-2.jpg",
      "/products/9-3.jpg",
      "/products/9-4.jpg",
    ],
    pdf: "/products/Stud.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS 304 / SS 202" },
      { label: "Finish", value: "Polished / Satin" },
      {
        label: "Applications",
        value: "Glass Fittings, Structural Fixtures, Decorative Use",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 10,
    name: "Castor Wheel",
    refNo: "BBX-010",
    description:
      "Smooth-rolling wheels designed for easy mobility of furniture and equipment. Swivel and fixed options available.",
    image: "/products/10-1.jpg",
    images: [
      "/products/10-1.jpg",
      "/products/10-2.jpg",
      "/products/10-3.jpg",
      "/products/10-4.jpg",
    ],
    pdf: "/products/Castor Wheel.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel / Rubber Wheel" },
      { label: "Type", value: "Swivel / Fixed" },
      { label: "Load Capacity", value: "Up to 200 kg per wheel" },
      {
        label: "Applications",
        value: "Furniture, Industrial Equipment, Medical",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 11,
    name: "Glass D Bracket",
    refNo: "BBX-011",
    description:
      "D-shaped stainless steel bracket for secure and aesthetic glass panel support. Ideal for frameless glass installations with a clean, modern look.",
    image: "/products/11-1.jpg",
    images: [
      "/products/11-1.jpg",
      "/products/11-2.jpg",
      "/products/11-3.jpg",
      "/products/11-4.jpg",
    ],
    pdf: "/products/Glass D Bracket.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS 304" },
      { label: "Finish", value: "Satin / Polished / Matt" },
      { label: "Glass Thickness", value: "8mm / 10mm / 12mm" },
      {
        label: "Applications",
        value: "Glass Railings, Partitions, Balconies, Shower Enclosures",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 12,
    name: "Castor Wheel",
    refNo: "BBX-012",
    description:
      "Smooth-rolling wheels designed for easy mobility of furniture and equipment. Swivel and fixed options available.",
    image: "/products/12-1.jpg",
    images: [
      "/products/12-1.jpg",
      "/products/12-2.jpg",
      "/products/12-3.jpg",
      "/products/12-4.jpg",
    ],
    pdf: "/products/Castor Wheel.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel / Rubber Wheel" },
      { label: "Type", value: "Swivel / Fixed" },
      { label: "Load Capacity", value: "Up to 200 kg per wheel" },
      {
        label: "Applications",
        value: "Furniture, Industrial Equipment, Medical",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 13,
    name: "Pin Cylinder",
    refNo: "BBX-013",
    description:
      "Precision pin tumbler cylinder for mortise and rim locks. Offers smooth key operation with high pick resistance for enhanced door security.",
    image: "/products/13-1.jpg",
    images: [
      "/products/13-1.jpg",
      "/products/13-2.jpg",
      "/products/13-3.jpg",
      "/products/13-4.jpg",
    ],
    pdf: "/products/Pin Cylinder.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Brass / Stainless Steel" },
      { label: "Finish", value: "Satin / Polished / Nickel Plated" },
      { label: "Sizes", value: "60mm / 70mm / 80mm" },
      { label: "Applications", value: "Mortise Locks, Rim Locks, Deadbolts" },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 14,
    name: "Door Stopper",
    refNo: "BBX-014",
    description:
      "Protective accessory designed to prevent door damage and wall impact. Durable rubber-tipped stop with stainless steel mounting.",
    image: "/products/14-1.jpg",
    images: [
      "/products/14-1.jpg",
      "/products/14-2.jpg",
      "/products/14-3.jpg",
      "/products/14-4.jpg",
    ],
    pdf: "/products/Door Stopper.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel + Rubber Tip" },
      { label: "Grade", value: "SS 202 / SS 304" },
      { label: "Finish", value: "Satin / Polished" },
      { label: "Applications", value: "All Door Types" },
      { label: "Min. Order Quantity", value: "200 Units" },
    ],
  },
  {
    id: 15,
    name: "CY Mortise Lock",
    refNo: "BBX-015",
    description:
      "Cylinder-based mortise lock offering reliable security and smooth operation. Suitable for a wide range of residential and commercial door applications.",
    image: "/products/15-1.jpg",
    images: [
      "/products/15-1.jpg",
      "/products/15-2.jpg",
      "/products/15-3.jpg",
      "/products/15-4.jpg",
    ],
    pdf: "/products/CY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 16,
    name: "Tower Bolt",
    refNo: "BBX-016",
    description:
      "Simple and effective locking solution for doors and windows. Smooth sliding action with durable construction.",
    image: "/products/16-1.jpg",
    images: [
      "/products/16-1.jpg",
      "/products/16-2.jpg",
      "/products/16-3.jpg",
      "/products/16-4.jpg",
    ],
    pdf: "/products/Tower Bolt.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / SS 202" },
      { label: "Finish", value: "Satin / Polished / Antique" },
      { label: "Sizes", value: '4", 6", 8", 10", 12"' },
      { label: "Applications", value: "Doors, Windows, Gates" },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 17,
    name: "SS Hinges",
    refNo: "BBX-017",
    description:
      "Heavy-duty stainless steel hinges with excellent durability, smooth movement, and rust resistance. Ideal for heavy doors and commercial applications.",
    image: "/products/17-1.jpg",
    images: [
      "/products/17-1.jpg",
      "/products/17-2.jpg",
      "/products/17-3.jpg",
      "/products/17-4.jpg",
    ],
    pdf: "/products/SS Hinges.pdf",
    category: "hinges",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS 304 / SS 202" },
      { label: "Finish Method", value: "Polished / Satin" },
      { label: "Finish", value: "Matt / Glossy" },
      { label: "Sizes", value: '3", 4", 5", 6"' },
      {
        label: "Applications",
        value: "Heavy Doors, Commercial Doors, Industrial Doors",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 18,
    name: "Door Pull Handle",
    refNo: "BBX-018",
    description:
      "Sleek and ergonomic pull handles for doors, entrances, and storefronts. Designed for comfortable grip and heavy daily use.",
    image: "/products/18-1.jpg",
    images: [
      "/products/18-1.jpg",
      "/products/18-2.jpg",
      "/products/18-3.jpg",
      "/products/18-4.jpg",
    ],
    pdf: "/products/Door Pull Handle.pdf",
    category: "door-handles",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Grade", value: "SS 304 / SS 202" },
      { label: "Finish", value: "Satin / Polished / Matt" },
      { label: "Sizes", value: '12", 18", 24", 36"' },
      {
        label: "Applications",
        value: "Main Entrance Doors, Commercial Doors, Storefronts",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 19,
    name: "Pin Cylinder",
    refNo: "BBX-019",
    description:
      "Precision pin tumbler cylinder for mortise and rim locks. Offers smooth key operation with high pick resistance for enhanced door security.",
    image: "/products/19-1.jpg",
    images: [
      "/products/19-1.jpg",
      "/products/19-2.jpg",
      "/products/19-3.jpg",
      "/products/19-4.jpg",
    ],
    pdf: "/products/Pin Cylinder.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Brass / Stainless Steel" },
      { label: "Finish", value: "Satin / Polished / Nickel Plated" },
      { label: "Sizes", value: "60mm / 70mm / 80mm" },
      { label: "Applications", value: "Mortise Locks, Rim Locks, Deadbolts" },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 20,
    name: "Ball Castor Wheel",
    refNo: "BBX-020",
    description:
      "360-degree swivel ball castor wheels providing effortless multi-directional movement. Ideal for furniture and light industrial equipment.",
    image: "/products/20-1.jpg",
    images: [
      "/products/20-1.jpg",
      "/products/20-2.jpg",
      "/products/20-3.jpg",
      "/products/20-4.jpg",
    ],
    pdf: "/products/Ball Castor Wheel.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel / Chrome Steel Ball" },
      { label: "Type", value: "Ball Swivel" },
      { label: "Load Capacity", value: "Up to 50 kg per wheel" },
      {
        label: "Applications",
        value: "Light Furniture, Display Racks, Small Equipment",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 21,
    name: "CY Mortise Lock",
    refNo: "BBX-021",
    description:
      "Cylinder-based mortise lock offering reliable security and smooth operation. Suitable for a wide range of residential and commercial door applications.",
    image: "/products/21-1.jpg",
    images: [
      "/products/21-1.jpg",
      "/products/21-2.jpg",
      "/products/21-3.jpg",
      "/products/21-4.jpg",
    ],
    pdf: "/products/CY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 22,
    name: "Rosette Handle",
    refNo: "BBX-022",
    description:
      "Elegant rosette-style door handles combining classical design with modern functionality. Adds a decorative touch to any interior door.",
    image: "/products/22-1.jpg",
    images: [
      "/products/22-1.jpg",
      "/products/22-2.jpg",
      "/products/22-3.jpg",
      "/products/22-4.jpg",
    ],
    pdf: "/products/Rosette Handle.pdf",
    category: "door-handles",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass / Zinc Alloy" },
      { label: "Finish", value: "Polished / Satin / Antique Gold / Chrome" },
      { label: "Sizes", value: '6", 8", 10"' },
      {
        label: "Applications",
        value: "Interior Doors, Bedroom Doors, Decorative Doors",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 23,
    name: "Rosette Handle",
    refNo: "BBX-023",
    description:
      "Elegant rosette-style door handles combining classical design with modern functionality. Adds a decorative touch to any interior door.",
    image: "/products/23-1.jpg",
    images: [
      "/products/23-1.jpg",
      "/products/23-2.jpg",
      "/products/23-3.jpg",
      "/products/23-4.jpg",
    ],
    pdf: "/products/Rosette Handle.pdf",
    category: "door-handles",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass / Zinc Alloy" },
      { label: "Finish", value: "Polished / Satin / Antique Gold / Chrome" },
      { label: "Sizes", value: '6", 8", 10"' },
      {
        label: "Applications",
        value: "Interior Doors, Bedroom Doors, Decorative Doors",
      },
      { label: "Min. Order Quantity", value: "100 Units" },
    ],
  },
  {
    id: 24,
    name: "Fixed Castor Wheel",
    refNo: "BBX-024",
    description:
      "Non-swivel fixed castor wheels providing straight-line movement and stability for heavy-duty applications.",
    image: "/products/24-1.jpg",
    images: [
      "/products/24-1.jpg",
      "/products/24-2.jpg",
      "/products/24-3.jpg",
      "/products/24-4.jpg",
    ],
    pdf: "/products/Fixed Castor Wheel.pdf",
    category: "other",
    specs: [
      { label: "Material", value: "Stainless Steel / Rubber Wheel" },
      { label: "Type", value: "Fixed (Non-Swivel)" },
      { label: "Load Capacity", value: "Up to 250 kg per wheel" },
      {
        label: "Applications",
        value: "Heavy Equipment, Industrial Trolleys, Warehousing",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 25,
    name: "KY Mortise Lock",
    refNo: "BBX-025",
    description:
      "Key-based mortise lock engineered for enhanced security and smooth bolt action. Built to suit both residential and commercial installations.",
    image: "/products/25-1.jpg",
    images: [
      "/products/25-1.jpg",
      "/products/25-2.jpg",
      "/products/25-3.jpg",
      "/products/25-4.jpg",
    ],
    pdf: "/products/KY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
  {
    id: 26,
    name: "KY Mortise Lock",
    refNo: "BBX-026",
    description:
      "Key-based mortise lock engineered for enhanced security and smooth bolt action. Built to suit both residential and commercial installations.",
    image: "/products/26-1.jpg",
    images: [
      "/products/26-1.jpg",
      "/products/26-2.jpg",
      "/products/26-3.jpg",
      "/products/26-4.jpg",
    ],
    pdf: "/products/KY Mortise Lock.pdf",
    category: "mortise-lock",
    specs: [
      { label: "Material", value: "Stainless Steel / Brass" },
      { label: "Grade", value: "SS 304 / Brass" },
      { label: "Finish", value: "Satin / Polished / Antique Gold" },
      { label: "Body Size", value: "60mm / 70mm / 80mm" },
      {
        label: "Applications",
        value: "Residential Doors, Commercial Doors, Hotel Rooms",
      },
      { label: "Min. Order Quantity", value: "50 Units" },
    ],
  },
];
