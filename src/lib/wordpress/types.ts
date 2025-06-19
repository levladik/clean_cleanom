/**
 * WordPress API Types
 * 
 * This file defines TypeScript interfaces for data fetched from WordPress API
 */

// Base WordPress Entity
export interface WPEntity {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
}

// WordPress Media
export interface WPMedia extends WPEntity {
  title: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  source_url: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

// Service Post Type
export interface WPService extends WPEntity {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  featured_image_url: string; // This will be populated after fetching
  acf: {
    base_price: number;
    price_per_square_foot: number;
    available_addons: WPAddon[];
    frequency_options: WPFrequencyOption[];
  };
}

// Testimonial Post Type
export interface WPTestimonial extends WPEntity {
  title: {
    rendered: string;
  };
  acf: {
    client_name: string;
    client_image: number;
    client_image_url: string; // This will be populated after fetching
    rating: number;
    testimonial_text: string;
    service_used: number; // Reference to service ID
  };
}

// FAQ Post Type
export interface WPFAQ extends WPEntity {
  title: {
    rendered: string;
  };
  acf: {
    question: string;
    answer: string;
    category: string;
  };
}

// Gallery Item Post Type
export interface WPGalleryItem extends WPEntity {
  title: {
    rendered: string;
  };
  acf: {
    before_image: number;
    before_image_url: string; // This will be populated after fetching
    after_image: number;
    after_image_url: string; // This will be populated after fetching
    description: string;
    service_type: number; // Reference to service ID
  };
}

// Company Information from Options Page
export interface WPCompanyInfo {
  company_name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  social_media: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

// Add-on Type
export interface WPAddon {
  name: string;
  description: string;
  price: number;
}

// Frequency Option Type
export interface WPFrequencyOption {
  name: string;
  discount_percentage: number;
}

// API Response Types
export interface WPCollectionResponse<T> {
  data: T[];
  meta: {
    total: number;
    pages: number;
  };
}

export interface WPSingleResponse<T> {
  data: T;
}
