export interface CompanySetting {
  id?: number;
  company_name: string;
  tagline: string;
  established_year: string;
  veterinary_code: string;
  hero_title: string;
  hero_subtitle: string;
  hero_badge: string;
  hero_image: string;
  phone_primary: string;
  phone_sales: string;
  phone_emergency: string;
  email: string;
  address: string;
  working_hours: string;
  annual_tonnage: string;
  active_centers: string;
  cold_chain_temp: string;
  satisfaction_rate: string;
  about_story: string;
  about_vision: string;
  about_image: string;
  facility_image: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  order: number;
  products_count?: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: number;
  category_name?: string;
  category_slug?: string;
  animal_type: 'beef' | 'lamb' | 'camel' | 'poultry' | 'offal';
  animal_type_display?: string;
  cut_type: string;
  temperature_state: 'chilled' | 'frozen';
  temperature_state_display?: string;
  packaging_type: 'map' | 'vacuum' | 'bulk_box' | 'carcass';
  packaging_type_display?: string;
  shelf_life: string;
  weight_options: string;
  suitable_for: string;
  target_audience: string;
  marbling_score: number;
  tenderness_rating: number;
  protein_per_100g: string;
  fat_per_100g: string;
  calories_per_100g: string;
  description: string;
  cooking_guide?: string;
  storage_instructions: string;
  image: string;
  is_featured: boolean;
  is_available: boolean;
  order: number;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  target_sector: string;
  benefits: string;
  icon: string;
  order: number;
}

export interface QualityStandard {
  id: number;
  title: string;
  authority: string;
  license_number: string;
  description: string;
  badge_text: string;
  order: number;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  featured_image: string;
  author: string;
  author_role: string;
  reading_time: string;
  is_published: boolean;
  published_at: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface ContactInquiry {
  id?: number;
  full_name: string;
  organization?: string;
  phone: string;
  email?: string;
  inquiry_type: string;
  estimated_tonnage?: string;
  message: string;
  created_at?: string;
}

export interface CompanyBundle {
  settings: CompanySetting;
  categories: ProductCategory[];
  featured_products: Product[];
  products: Product[];
  services: Service[];
  standards: QualityStandard[];
  articles: Article[];
  faqs: FAQ[];
}
