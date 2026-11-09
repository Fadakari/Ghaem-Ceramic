import { CompanyBundle, Product, Article, ContactInquiry } from '../types/company';
import { defaultCompanyBundle } from './defaultData';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.bisansamyazd.ir';

export async function getCompanyBundle(): Promise<CompanyBundle> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/company/bundle/`, {
      next: { revalidate: 60 },
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`Failed to fetch from backend (Status: ${res.status}), using default meat catalog dataset.`);
      return defaultCompanyBundle;
    }

    const data = await res.json();
    return {
      settings: data.settings || defaultCompanyBundle.settings,
      categories: data.categories?.length > 0 ? data.categories : defaultCompanyBundle.categories,
      featured_products: data.featured_products?.length > 0 ? data.featured_products : defaultCompanyBundle.featured_products,
      products: data.products?.length > 0 ? data.products : (data.featured_products || defaultCompanyBundle.featured_products),
      services: data.services?.length > 0 ? data.services : defaultCompanyBundle.services,
      standards: data.standards?.length > 0 ? data.standards : defaultCompanyBundle.standards,
      articles: data.articles?.length > 0 ? data.articles : defaultCompanyBundle.articles,
      faqs: data.faqs?.length > 0 ? data.faqs : defaultCompanyBundle.faqs,
    };
  } catch (error) {
    console.warn("Backend API not reachable currently, loading cached catalog data.", error);
    return defaultCompanyBundle;
  }
}

export async function getProducts(search?: string, category?: string): Promise<Product[]> {
  const bundle = await getCompanyBundle();
  let list = bundle.products && bundle.products.length > 0 ? bundle.products : bundle.featured_products;

  if (category && category !== 'all') {
    list = list.filter((p) => p.category_slug === category || p.animal_type === category);
  }

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.cut_type.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.suitable_for.toLowerCase().includes(q)
    );
  }

  return list;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const bundle = await getCompanyBundle();
  const decoded = decodeURIComponent(slug);
  const allProds = [...bundle.products, ...bundle.featured_products];
  const found = allProds.find((p) => p.slug === decoded || p.slug === slug);
  return found || null;
}

export async function getArticles(): Promise<Article[]> {
  const bundle = await getCompanyBundle();
  return bundle.articles || defaultCompanyBundle.articles || [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  const decoded = decodeURIComponent(slug);
  const found = articles.find((a) => a.slug === decoded || a.slug === slug);
  return found || null;
}

export async function submitContactInquiry(data: Partial<ContactInquiry>): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/company/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    if (res.ok) {
      return {
        success: true,
        message: resData.message || 'استعلام شما با موفقیت ثبت شد. کارشناسان بازرگانی بی‌سان سام در اسرع وقت با شما تماس خواهند گرفت.',
      };
    } else {
      return {
        success: false,
        message: 'ثبت اطلاعات با خطا مواجه شد. لطفاً ورودی‌ها را بررسی نموده یا مستقیماً تماس بگیرید.',
      };
    }
  } catch (error) {
    console.error('Error submitting contact inquiry:', error);
    return {
      success: false,
      message: 'خطا در برقراری ارتباط با سرور. لطفاً با شماره ۰۳۵-۳۸۲۰۰۰۰۰ تماس حاصل فرمایید.',
    };
  }
}
