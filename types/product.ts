// Product Hero Section
export interface ProductHeroProps {
  image: string;
  title: string;
  description: string;
  brochureUrl: string;
}

// Product Specification Table
export interface SpecificationItem {
  label: string;
  values: string[];
}

export interface SpecificationTableProps {
  specifications: SpecificationItem[];
}
