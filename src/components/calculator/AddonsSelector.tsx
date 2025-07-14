/**
 * AddonsSelector Component
 * 
 * Component for selecting service add-ons in the calculator
 */

import { additionalServices, getServiceInfo } from '@/lib/calculator/pricing';
import { ServiceType } from '@/lib/calculator/types';
import React from 'react';

interface AddonsSelectorProps {
  selectedService: ServiceType
}

export default function AddonsSelector({ selectedService }: AddonsSelectorProps) {

  const service = getServiceInfo(selectedService)
  const addonsList = additionalServices
  const includedServices = service?.includedServices

  return (
    <div className="addons-selector">
      <ul>
        {addonsList.map((addon) => {
          const isAddonIncluded = includedServices?.includes(addon.id);

          return (
            <li key={addon.id} className="addon-item">
              <label className="flex items-center gap-2">
                <input type="checkbox" value={addon.id} checked={isAddonIncluded}/>
                <span>{addon.name} - {addon.price} {addon.unit}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
