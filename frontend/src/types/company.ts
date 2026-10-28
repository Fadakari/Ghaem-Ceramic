export interface SiteSetting {
  id?: number;
  company_name_fa: string;
  company_name_en: string;
  tagline: string;
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  about_title: string;
  about_text_1: string;
  about_text_2: string;
  phone: string;
  fax: string;
  email: string;
  website: string;
  address: string;
  manager_name: string;
  catalog_title: string;
  catalog_url: string;
  meta_title: string;
  meta_description: string;
  updated_at?: string;
}

export interface KeyStat {
  id?: number;
  value: string;
  label: string;
  sublabel: string;
  order: number;
}

export interface CeramicAdvantage {
  id?: number;
  title: string;
  description: string;
  hardox_comparison: string;
  icon_name: string;
  order: number;
}

export interface CeramicProductForm {
  id?: number;
  code: string;
  name_fa: string;
  name_en: string;
  category: string;
  short_desc: string;
  full_desc: string;
  dimensions: string;
  applications: string;
  industries: string;
  order: number;
}

export interface TechnicalProperty {
  id?: number;
  name_fa: string;
  name_en: string;
  value: string;
  standard_ref: string;
  category: 'chemical' | 'physical' | 'mechanical';
  order: number;
}

export interface ProductionStep {
  id?: number;
  step_number: number;
  title: string;
  headline: string;
  description: string;
  equipment: string;
  order: number;
}

export interface InstallationMethod {
  id?: number;
  title: string;
  subtitle: string;
  description: string;
  specifications: string;
  order: number;
}

export interface IndustrySector {
  id?: number;
  title: string;
  description: string;
  equipments: string;
  icon_name: string;
  order: number;
}

export interface ProjectTestimonial {
  id?: number;
  client_name: string;
  project_title: string;
  quote: string;
  result_highlight: string;
  letter_number: string;
  letter_date: string;
  signer: string;
  verified: boolean;
  order: number;
}

export interface CompanyBundle {
  settings: SiteSetting;
  stats: KeyStat[];
  advantages: CeramicAdvantage[];
  products: CeramicProductForm[];
  specs: TechnicalProperty[];
  production_steps: ProductionStep[];
  installation_methods: InstallationMethod[];
  industries: IndustrySector[];
  testimonials: ProjectTestimonial[];
}

export interface ContactFormData {
  full_name: string;
  company_name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
