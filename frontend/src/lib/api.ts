import { CompanyBundle, ContactFormData } from '../types/company';
import { defaultCompanyBundle } from './defaultData';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.behbodceramic.ir';

export async function getCompanyBundle(): Promise<CompanyBundle> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/company/bundle/?_t=${Date.now()}`, {
      cache: 'no-store', // Always fetch latest data from Django Admin
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

    if (!res.ok) {
      console.warn(`Failed to fetch from backend (Status: ${res.status}), using default catalog dataset.`);
      return defaultCompanyBundle;
    }

    const data = await res.json();
    return {
      settings: data.settings || defaultCompanyBundle.settings,
      stats: Array.isArray(data.stats) ? data.stats : defaultCompanyBundle.stats,
      advantages: Array.isArray(data.advantages) ? data.advantages : defaultCompanyBundle.advantages,
      products: Array.isArray(data.products) ? data.products : defaultCompanyBundle.products,
      specs: Array.isArray(data.specs) ? data.specs : defaultCompanyBundle.specs,
      production_steps: Array.isArray(data.production_steps) ? data.production_steps : defaultCompanyBundle.production_steps,
      installation_methods: Array.isArray(data.installation_methods) ? data.installation_methods : defaultCompanyBundle.installation_methods,
      industries: Array.isArray(data.industries) ? data.industries : defaultCompanyBundle.industries,
      testimonials: Array.isArray(data.testimonials) ? data.testimonials : defaultCompanyBundle.testimonials,
    };
  } catch (error) {
    console.warn("Backend API not reachable currently, loading cached catalog data.", error);
    return defaultCompanyBundle;
  }
}

export async function submitContactInquiry(data: ContactFormData): Promise<{ success: boolean; message: string }> {
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
        message: resData.message || "درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت."
      };
    } else {
      return {
        success: false,
        message: "ثبت اطلاعات با خطا مواجه شد. لطفاً ورودی‌ها را بررسی نموده یا مستقیماً تماس بگیرید."
      };
    }
  } catch (error) {
    console.error("Error submitting contact inquiry:", error);
    return {
      success: false,
      message: "خطا در برقراری ارتباط با سرور. لطفاً با شماره ۰۳۵-۳۷۳۰۱۳۴۰ تماس حاصل فرمایید."
    };
  }
}
