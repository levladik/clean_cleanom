/**
 * WordPress API Utilities
 * 
 * This file provides functions for fetching data from WordPress API
 */

import {
  WPService,
  WPTestimonial,
  WPFAQ,
  WPGalleryItem,
  WPMedia,
  WPCompanyInfo
} from './types';

// WordPress API base URL - should be set in environment variables
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

/**
 * Fetch data from WordPress API
 */
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const headers = {
    'Content-Type': 'application/json',
  };

  const res = await fetch(`${WP_API_URL}${endpoint}`, {
    headers,
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    console.error('API Error:', await res.text());
    throw new Error(`Failed to fetch API, received status ${res.status}`);
  }

  return await res.json();
}

/**
 * Fetch media details by ID
 */
export async function getMediaById(id: number): Promise<WPMedia> {
  return fetchAPI<WPMedia>(`/media/${id}`);
}

/**
 * Fetch all services
 */
export async function getAllServices(): Promise<WPService[]> {
  const data = await fetchAPI<WPService[]>('/services?per_page=100');
  
  // Fetch featured images for each service
  return await Promise.all(
    data.map(async (service) => {
      if (service.featured_media) {
        const media = await getMediaById(service.featured_media);
        return {
          ...service,
          featured_image_url: media.source_url,
        };
      }
      return service;
    })
  );
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<WPService | null> {
  const services = await fetchAPI<WPService[]>(`/services?slug=${slug}`);
  
  if (services.length === 0) {
    return null;
  }
  
  const service = services[0];
  
  if (service.featured_media) {
    const media = await getMediaById(service.featured_media);
    return {
      ...service,
      featured_image_url: media.source_url,
    };
  }
  
  return service;
}

/**
 * Fetch all testimonials
 */
export async function getAllTestimonials(): Promise<WPTestimonial[]> {
  const data = await fetchAPI<WPTestimonial[]>('/testimonials?per_page=100');
  
  // Fetch client images for each testimonial
  return await Promise.all(
    data.map(async (testimonial) => {
      if (testimonial.acf.client_image) {
        const media = await getMediaById(testimonial.acf.client_image);
        return {
          ...testimonial,
          acf: {
            ...testimonial.acf,
            client_image_url: media.source_url,
          },
        };
      }
      return testimonial;
    })
  );
}

/**
 * Fetch all FAQ items
 */
export async function getAllFAQs(): Promise<WPFAQ[]> {
  return fetchAPI<WPFAQ[]>('/faqs?per_page=100');
}

/**
 * Fetch all gallery items
 */
export async function getAllGalleryItems(): Promise<WPGalleryItem[]> {
  const data = await fetchAPI<WPGalleryItem[]>('/gallery?per_page=100');
  
  // Fetch before and after images for each gallery item
  return await Promise.all(
    data.map(async (item) => {
      const beforeImage = item.acf.before_image ? await getMediaById(item.acf.before_image) : null;
      const afterImage = item.acf.after_image ? await getMediaById(item.acf.after_image) : null;
      
      return {
        ...item,
        acf: {
          ...item.acf,
          before_image_url: beforeImage ? beforeImage.source_url : '',
          after_image_url: afterImage ? afterImage.source_url : '',
        },
      };
    })
  );
}

/**
 * Fetch company information from options page
 */
export async function getCompanyInfo(): Promise<WPCompanyInfo> {
  return fetchAPI<WPCompanyInfo>('/options/company_info');
}

/**
 * Fetch data for the homepage
 */
export async function getHomepageData() {
  // Fetch all required data in parallel
  const [services, testimonials, faqs, galleryItems, companyInfo] = await Promise.all([
    getAllServices(),
    getAllTestimonials(),
    getAllFAQs(),
    getAllGalleryItems(),
    getCompanyInfo(),
  ]);
  
  return {
    services,
    testimonials,
    faqs,
    galleryItems,
    companyInfo,
  };
}
