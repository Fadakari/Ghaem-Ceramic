"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CompanyBundle, SiteSetting, KeyStat, CeramicAdvantage, CeramicProductForm, TechnicalProperty, ProductionStep, InstallationMethod, IndustrySector, ProjectTestimonial } from "@/types/company";
import { defaultCompanyBundle } from "@/lib/defaultData";

interface CompanyContextType {
  bundle: CompanyBundle;
  settings: SiteSetting;
  stats: KeyStat[];
  advantages: CeramicAdvantage[];
  products: CeramicProductForm[];
  specs: TechnicalProperty[];
  production_steps: ProductionStep[];
  installation_methods: InstallationMethod[];
  industries: IndustrySector[];
  testimonials: ProjectTestimonial[];
  isLoading: boolean;
  refresh: () => Promise<void>;
}

const CompanyContext = createContext<CompanyContextType>({
  bundle: defaultCompanyBundle,
  settings: defaultCompanyBundle.settings,
  stats: defaultCompanyBundle.stats,
  advantages: defaultCompanyBundle.advantages,
  products: defaultCompanyBundle.products,
  specs: defaultCompanyBundle.specs,
  production_steps: defaultCompanyBundle.production_steps,
  installation_methods: defaultCompanyBundle.installation_methods,
  industries: defaultCompanyBundle.industries,
  testimonials: defaultCompanyBundle.testimonials,
  isLoading: false,
  refresh: async () => {},
});

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [bundle, setBundle] = useState<CompanyBundle>(defaultCompanyBundle);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLiveBundle = async () => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${apiUrl}/api/company/bundle/`, {
        cache: "no-store",
        headers: {
          "Accept": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data) {
          setBundle({
            settings: data.settings || defaultCompanyBundle.settings,
            stats: Array.isArray(data.stats) && data.stats.length > 0 ? data.stats : defaultCompanyBundle.stats,
            advantages: Array.isArray(data.advantages) && data.advantages.length > 0 ? data.advantages : defaultCompanyBundle.advantages,
            products: Array.isArray(data.products) && data.products.length > 0 ? data.products : defaultCompanyBundle.products,
            specs: Array.isArray(data.specs) && data.specs.length > 0 ? data.specs : defaultCompanyBundle.specs,
            production_steps: Array.isArray(data.production_steps) && data.production_steps.length > 0 ? data.production_steps : defaultCompanyBundle.production_steps,
            installation_methods: Array.isArray(data.installation_methods) && data.installation_methods.length > 0 ? data.installation_methods : defaultCompanyBundle.installation_methods,
            industries: Array.isArray(data.industries) && data.industries.length > 0 ? data.industries : defaultCompanyBundle.industries,
            testimonials: Array.isArray(data.testimonials) && data.testimonials.length > 0 ? data.testimonials : defaultCompanyBundle.testimonials,
          });
        }
      }
    } catch (err) {
      // Backend temporarily unreachable; fallback data is active
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveBundle();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        bundle,
        settings: bundle.settings,
        stats: bundle.stats,
        advantages: bundle.advantages,
        products: bundle.products,
        specs: bundle.specs,
        production_steps: bundle.production_steps,
        installation_methods: bundle.installation_methods,
        industries: bundle.industries,
        testimonials: bundle.testimonials,
        isLoading,
        refresh: fetchLiveBundle,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
}
