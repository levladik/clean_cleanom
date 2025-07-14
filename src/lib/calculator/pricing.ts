/**
 * Calculator Pricing Logic
 * 
 * This file provides functions for calculating cleaning service prices
 */

import { ServiceType, ServicePricing, AdditionalService, PriceSummary, CalculatorState } from './types';

// Main areas
export const AREA_TIERS = [
  { min: 0, max: 50, label: '0-50' },
  { min: 51, max: 70, label: '51-70' },
  { min: 71, max: 100, label: '71-100' },
  { min: 101, max: 200, label: '101-200' },
  { min: 201, max: Infinity, label: '200+' }
];

function createServicePricing(
  id: ServiceType,
  name: string,
  basePrices: number[],
  minPrice: number,
  pricePerExtraM2: number[],
  includedServices: string[] = []
): ServicePricing {
  
  return {
    id,
    name,
    tiers: AREA_TIERS.map((tier, index) => ({
      ...tier,
      basePrice: basePrices[index],
      pricePerExtraM2: pricePerExtraM2[index]
    })),
    minPrice,
    includedServices
  };
}

export const services: ServicePricing[] = [
  createServicePricing(ServiceType.BASIC, 'Базовая уборка', [5000, 6000, 7000, 7000, 7000], 5000, [0, 0, 0, 0, 500]),
  createServicePricing(ServiceType.GENERAL, 'Генеральная уборка', [11000, 13000, 15000, 7000, 7000], 11000, [0, 0, 0, 0, 1000], ['balcony', 'mold']),
  createServicePricing(ServiceType.POST_REPAIR, 'Уборка после ремонта', [15000, 18000, 20000, 7000, 7000], 15000, [0, 0, 0, 0, 1000], ['balcony', 'mold']),
  createServicePricing(ServiceType.WINDOW_CLEANING, 'Мытье окон', [2000, 3000, 4000, 6000, 0], 4000, [0, 0, 0, 0, 0])
]

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

export function getServiceInfo(serviceType: ServiceType) {
  const serviceInfo = services.find(service => service.id === serviceType)
  return serviceInfo
}


/**
 * Calculate base price for a service based on area
 */
export function calculateBasePrice(serviceType: ServiceType, area: string): number {
  const service = getServiceInfo(serviceType)
  const minPrice = service?.minPrice
  
  if (!service) {
    throw new Error(`Service with ID ${serviceType} not found`);
  }
  
  // Find the appropriate tier for the given area
  const tier = service.tiers.find((tier) => area === tier.label)
  
  // if (!tier) {
  //   // If area is beyond the defined tiers, use the last tier
  //   if (area >= service.tiers[service.tiers.length - 1].min) {
  //     const lastTier = service.tiers[service.tiers.length - 1];
      
  //     // Calculate the additional cost for areas beyond the base tier
  //     if (area > lastTier.min) {
  //       const extraArea = area - lastTier.min;
  //       return lastTier.basePrice + (extraArea * lastTier.pricePerExtraM2);
  //     }
      
  //     return lastTier.basePrice;
  //   }
    
  //   // If area is below the minimum, use the first tier
  //   return service.tiers[0].basePrice;
  // }
  
  // Calculate the additional cost for areas beyond the base tier
  // if (area > tier.min) {
  //   const extraArea = area - tier.min;
  //   return tier.basePrice + (extraArea * tier.pricePerExtraM2);
  // }
  
  if (!tier) {
    throw new Error(`No pricing tier found for area "${area}" in service "${serviceType}"`)
  } else if (tier.basePrice < minPrice) {
    return tier.minPrice
  }
  return tier.basePrice
}

/**
 * Calculate the price for additional services
 */
export function calculateAddonsPrice(serviceType: ServiceType) {
  const service = services.find(service => service.id === serviceType)
  const includedServices = service?.includedServices
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
export function getIncludedServices(serviceType: ServiceType): AdditionalService[] {
  const service = services.find(s => s.id === serviceType);
  
  if (!service) {
    return [];
  }
  
  return additionalServices.filter(addon => service.includedServices.includes(addon.id));
}

/**
 * Get a service by its ID
 */
export function getServiceById(serviceType: ServiceType): ServicePricing | undefined {
  return services.find(s => s.id === serviceType);
}

/**
 * Get an additional service by its ID
 */
export function getAdditionalServiceById(addonId: string): AdditionalService | undefined {
  return additionalServices.find(a => a.id === addonId);
}
