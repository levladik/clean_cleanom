/**
 * Calculator Pricing Logic
 * 
 * This file provides functions for calculating cleaning service prices
 */

import { ServiceType, ServicePricing, AdditionalService, PriceSummary, CalculatorState } from './types';

// Main services pricing data
export const services: ServicePricing[] = [
  {
    id: ServiceType.BASIC,
    name: 'Базовая уборка',
    tiers: [
      { minArea: 0, maxArea: 50, basePrice: 5000 },
      { minArea: 50, maxArea: 70, basePrice: 6000 },
      { minArea: 70, maxArea: 100, basePrice: 7000 },
      { minArea: 100, maxArea: 200, basePrice: 7000, pricePerExtraM2: 500 }
    ],
    minPrice: 5000,
    includedServices: []
  },
  {
    id: ServiceType.GENERAL,
    name: 'Генеральная уборка',
    tiers: [
      { minArea: 0, maxArea: 50, basePrice: 11000 },
      { minArea: 50, maxArea: 70, basePrice: 13000 },
      { minArea: 70, maxArea: 100, basePrice: 15000 },
      { minArea: 100, maxArea: 200, basePrice: 7000, pricePerExtraM2: 1000 }
    ],
    minPrice: 11000,
    includedServices: ['window_cleaning', 'mold']
  },
  {
    id: ServiceType.POST_REPAIR,
    name: 'Уборка после ремонта',
    tiers: [
      { minArea: 0, maxArea: 50, basePrice: 15000 },
      { minArea: 50, maxArea: 70, basePrice: 18000 },
      { minArea: 70, maxArea: 100, basePrice: 20000 },
      { minArea: 100, maxArea: 200, basePrice: 7000, pricePerExtraM2: 1000 }
    ],
    minPrice: 15000,
    includedServices: ['window_cleaning', 'mold']
  },
  {
    id: ServiceType.WINDOW_CLEANING,
    name: 'Мытье окон',
    tiers: [
      { minArea: 0, maxArea: 50, basePrice: 2000 },
      { minArea: 50, maxArea: 70, basePrice: 3000 },
      { minArea: 70, maxArea: 100, basePrice: 4000 },
      { minArea: 100, maxArea: 200, basePrice: 6000 }
    ],
    minPrice: 4000,
    includedServices: []
  }
];

// Additional services pricing data
export const additionalServices: AdditionalService[] = [
  {
    id: 'balcony',
    name: 'Уборка балконов/террас',
    price: 1000,
    unit: 'm2'
  },
  {
    id: 'balcony_glass',
    name: 'Мытье стеклянных ограждений балконов/террас',
    price: 1000,
    unit: 'm2'
  },
  {
    id: 'appliance_cleaning',
    name: 'Мытье холодильников/печей/свч/вытяжек',
    price: 1000,
    unit: 'item'
  },
  {
    id: 'mold',
    name: 'Плесень',
    price: 1000,
    unit: 'base'
  },
  {
    id: 'item_cleaning',
    name: 'Предметная чистка (чайники/сковородки/гриль/кофемашина)',
    price: 1000,
    unit: 'item'
  },
  {
    id: 'ironing',
    name: 'Глажка',
    price: 1000,
    unit: 'base',
    minQuantity: 10,
    pricePerExtra: 100
  }
];

/**
 * Calculate base price for a service based on area
 */
export function calculateBasePrice(serviceId: ServiceType, area: number): number {
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    throw new Error(`Service with ID ${serviceId} not found`);
  }
  
  // Find the appropriate tier for the given area
  const tier = service.tiers.find(t => area >= t.minArea && area < t.maxArea);
  
  if (!tier) {
    // If area is beyond the defined tiers, use the last tier
    if (area >= service.tiers[service.tiers.length - 1].minArea) {
      const lastTier = service.tiers[service.tiers.length - 1];
      
      // If the tier has a price per extra m2, calculate the additional cost
      if (lastTier.pricePerExtraM2 && area > lastTier.minArea) {
        const extraArea = area - lastTier.minArea;
        return lastTier.basePrice + (extraArea * lastTier.pricePerExtraM2);
      }
      
      return lastTier.basePrice;
    }
    
    // If area is below the minimum, use the first tier
    return service.tiers[0].basePrice;
  }
  
  // If the tier has a price per extra m2, calculate the additional cost
  if (tier.pricePerExtraM2 && area > tier.minArea) {
    const extraArea = area - tier.minArea;
    return tier.basePrice + (extraArea * tier.pricePerExtraM2);
  }
  
  return tier.basePrice;
}

/**
 * Calculate the price for additional services
 */
export function calculateAddonsPrice(
  selectedAddons: Record<string, number>,
  includedServices: string[]
): { total: number; breakdown: Record<string, number> } {
  let total = 0;
  const breakdown: Record<string, number> = {};
  
  Object.entries(selectedAddons).forEach(([addonId, quantity]) => {
    // Skip if the addon is included in the service
    if (includedServices.includes(addonId)) {
      breakdown[addonId] = 0;
      return;
    }
    
    const addon = additionalServices.find(a => a.id === addonId);
    if (!addon || quantity <= 0) {
      breakdown[addonId] = 0;
      return;
    }
    
    let addonPrice = 0;
    
    switch (addon.unit) {
      case 'm2':
        // Price per square meter
        addonPrice = addon.price * quantity;
        break;
        
      case 'item':
        // Price per item
        addonPrice = addon.price * quantity;
        break;
        
      case 'base':
        // Base price with potential extra charges
        if (addon.minQuantity && addon.pricePerExtra) {
          if (quantity <= addon.minQuantity) {
            addonPrice = addon.price;
          } else {
            const extraItems = quantity - addon.minQuantity;
            addonPrice = addon.price + (extraItems * addon.pricePerExtra);
          }
        } else {
          addonPrice = addon.price;
        }
        break;
    }
    
    breakdown[addonId] = addonPrice;
    total += addonPrice;
  });
  
  return { total, breakdown };
}

/**
 * Calculate the total price for a cleaning service
 */
export function calculateTotalPrice(state: CalculatorState): PriceSummary {
  const service = services.find(s => s.id === state.selectedService);
  
  if (!service) {
    throw new Error(`Service with ID ${state.selectedService} not found`);
  }
  
  // Calculate base price
  let basePrice = calculateBasePrice(state.selectedService, state.area);
  
  // Ensure minimum price is met
  basePrice = Math.max(basePrice, service.minPrice);
  
  // Calculate addons price
  const { total: addonsPrice } = calculateAddonsPrice(state.selectedAddons, service.includedServices);
  
  // Calculate total price
  const totalPrice = basePrice + addonsPrice;
  
  return {
    basePrice,
    addonsPrice,
    totalPrice,
    includedServices: service.includedServices
  };
}

/**
 * Get a list of included services for a given service type
 */
export function getIncludedServices(serviceId: ServiceType): AdditionalService[] {
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return [];
  }
  
  return additionalServices.filter(addon => service.includedServices.includes(addon.id));
}

/**
 * Get a service by its ID
 */
export function getServiceById(serviceId: ServiceType): ServicePricing | undefined {
  return services.find(s => s.id === serviceId);
}

/**
 * Get an additional service by its ID
 */
export function getAdditionalServiceById(addonId: string): AdditionalService | undefined {
  return additionalServices.find(a => a.id === addonId);
}
