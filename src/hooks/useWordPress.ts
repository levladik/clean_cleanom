/**
 * WordPress Custom Hook
 * 
 * This hook provides functions for fetching data from WordPress API
 */

import { useState, useEffect } from 'react';
import { getHomepageData } from '@/lib/wordpress/api';
import type {
  WPService,
  WPTestimonial,
  WPFAQ,
  WPGalleryItem,
  WPCompanyInfo
} from '@/lib/wordpress/types';

interface WordPressData {
  services: WPService[];
  testimonials: WPTestimonial[];
  faqs: WPFAQ[];
  galleryItems: WPGalleryItem[];
  companyInfo: WPCompanyInfo | null;
}

interface WordPressHookReturn extends WordPressData {
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useWordPress(): WordPressHookReturn {
  const [data, setData] = useState<WordPressData>({
    services: [],
    testimonials: [],
    faqs: [],
    galleryItems: [],
    companyInfo: null,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const homepageData = await getHomepageData();
      
      setData({
        services: homepageData.services,
        testimonials: homepageData.testimonials,
        faqs: homepageData.faqs,
        galleryItems: homepageData.galleryItems,
        companyInfo: homepageData.companyInfo,
      });
    } catch (err) {
      console.error('Error fetching WordPress data:', err);
      setError(err instanceof Error ? err : new Error('Failed to fetch data'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...data,
    loading,
    error,
    refetch: fetchData,
  };
}
