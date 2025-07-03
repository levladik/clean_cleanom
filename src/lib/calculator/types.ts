/**
 * Calculator Types
 * 
 * This file defines TypeScript interfaces for the cleaning service price calculator
 */

// Service Type
export enum ServiceType {
  BASIC = 'basic',
  GENERAL = 'general',
  POST_REPAIR = 'post_repair',
  WINDOW_CLEANING = 'window_cleaning'
}

// Pricing tier for area-based pricing
export interface PricingTier {
  min: number
  max: number
  basePrice: number
  pricePerExtraM2: number
  label: string
}

// Service pricing structure
export interface ServicePricing {
  id: ServiceType
  name: string
  tiers: PricingTier[]
  minPrice: number
  includedServices: string[]
}

// Additional service structure
export interface AdditionalService {
  id: string
  name: string 
  price: number
  unit: 'm2' | 'item' | 'base'
  pricePerExtra?: number
  minQuantity?: number
}

// Calculator state
export interface CalculatorState {
  selectedService: ServiceType
  area: number
  selectedAddons: Record<string, number>
}

// Price summary
export interface PriceSummary {
  basePrice: number
  addonsPrice: number
  totalPrice: number
  includedServices: string[]
}
