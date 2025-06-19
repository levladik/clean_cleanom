/**
 * Global TypeScript Types
 */

// WordPress data mapped to frontend types
import type { WPService } from '@/lib/wordpress/types';
import type { Service } from '@/lib/calculator/types';

// Mapping functions for WordPress data to frontend types
export function mapWPServiceToService(wpService: WPService): Service {
  return {
    id: wpService.id,
    name: wpService.title.rendered,
    description: wpService.content.rendered,
    basePrice: wpService.acf.base_price,
    pricePerSquareFoot: wpService.acf.price_per_square_foot,
    availableAddons: wpService.acf.available_addons.map((addon, index) => ({
      id: index, // Use numeric ID
      name: addon.name,
      description: addon.description,
      price: addon.price,
    })),
    frequencyOptions: wpService.acf.frequency_options.map((option, index) => ({
      id: index,
      name: option.name,
      discountPercentage: option.discount_percentage,
    })),
  };
}

// Navigation item type
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

// Section props
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

// Testimonial type
export interface Testimonial {
  id: number;
  clientName: string;
  clientImage: string;
  rating: number;
  text: string;
  serviceUsed: string;
}

// FAQ item type
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Gallery item type
export interface GalleryItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  serviceType: string;
}

// Company information type
export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// SEO metadata type
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
