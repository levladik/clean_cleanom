/**
 * WordPress API Route
 * 
 * This file provides API routes for fetching data from WordPress
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  getAllServices,
  getAllTestimonials,
  getAllFAQs,
  getAllGalleryItems,
  getCompanyInfo,
  getHomepageData
} from '@/lib/wordpress/api';

/**
 * GET handler for /api/wordpress/services
 */
export async function GET(request: NextRequest) {
  try {
    // Get the path from the URL
    const path = request.nextUrl.pathname.split('/api/wordpress/')[1];
    
    // Handle different API endpoints
    switch (path) {
      case 'services':
        const services = await getAllServices();
        return NextResponse.json({ services });
        
      case 'testimonials':
        const testimonials = await getAllTestimonials();
        return NextResponse.json({ testimonials });
        
      case 'faqs':
        const faqs = await getAllFAQs();
        return NextResponse.json({ faqs });
        
      case 'gallery':
        const galleryItems = await getAllGalleryItems();
        return NextResponse.json({ galleryItems });
        
      case 'company-info':
        const companyInfo = await getCompanyInfo();
        return NextResponse.json({ companyInfo });
        
      case 'homepage':
      default:
        const homepageData = await getHomepageData();
        return NextResponse.json(homepageData);
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from WordPress' },
      { status: 500 }
    );
  }
}
