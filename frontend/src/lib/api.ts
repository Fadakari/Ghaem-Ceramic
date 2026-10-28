import { CompanyBundle, ContactFormData } from '../types/company';
import { defaultCompanyBundle } from './defaultData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function getCompanyBundle(): Promise<CompanyBundle> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/company/bundle/`, {
      cache: 'no-store', // Always fetch latest data from Django Admin
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`Failed to fetch from backend (Status: ${res.status}), using default catalog dataset.`);
      return defaultCompanyBundle;
    }

    const data = await res.json();
    return {
      settings: data.settings || defaultCompanyBundle.settings,
      stats: data.stats && data.stats.length > 0 ? data.stats : defaultCompanyBundle.stats,
      advantages: data.advantages && data.advantages.length > 0 ? data.advantages : defaultCompanyBundle.advantages,
      products: data.products && data.products.length > 0 ? data.products : defaultCompanyBundle.products,
      specs: data.specs && data.specs.length > 0 ? data.specs : defaultCompanyBundle.specs,
      production_steps: data.production_steps && data.production_steps.length > 0 ? data.production_steps : defaultCompanyBundle.production_steps,
      installation_methods: data.installation_methods && data.installation_methods.length > 0 ? data.installation_methods : defaultCompanyBundle.installation_methods,
      industries: data.industries && data.industries.length > 0 ? data.industries : defaultCompanyBundle.industries,
      testimonials: data.testimonials && data.testimonials.length > 0 ? data.testimonials : defaultCompanyBundle.testimonials,
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
