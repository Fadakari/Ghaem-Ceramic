'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CompanyBundle } from '../types/company';
import { defaultCompanyBundle } from '../lib/defaultData';
import { API_BASE_URL } from '../lib/api';

interface CompanyContextType {
  data: CompanyBundle;
  isLoading: boolean;
}

const CompanyContext = createContext<CompanyContextType>({
  data: defaultCompanyBundle,
  isLoading: false,
});

export const CompanyProvider: React.FC<{
  children: React.ReactNode;
  initialData?: CompanyBundle;
}> = ({ children, initialData = defaultCompanyBundle }) => {
  const [data, setData] = useState<CompanyBundle>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  useEffect(() => {
    let isMounted = true;
    async function loadFresh() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/company/bundle/`, {
          cache: 'no-store',
        });
        if (res.ok) {
          const fresh = await res.json();
          if (isMounted && fresh.settings) {
            setData(fresh);
          }
        }
      } catch {
        // ignore in background
      }
    }
    loadFresh();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <CompanyContext.Provider value={{ data, isLoading }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => useContext(CompanyContext);
