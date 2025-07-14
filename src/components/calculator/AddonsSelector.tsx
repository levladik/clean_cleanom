/**
 * AddonsSelector Component
 * 
 * Component for selecting service add-ons in the calculator
 */

import { additionalServices } from '@/lib/calculator/pricing';
import { ServicePricing } from '@/lib/calculator/types';

interface AddonsSelectorProps {
  service: ServicePricing
}

export default function AddonsSelector({ service }: AddonsSelectorProps) {

  const includedServices = service.includedServices


  return (
    <div className="addons-selector">
      <ul>
        {additionalServices.map((addon) => {
          const isAddonIncluded = includedServices?.includes(addon.id)

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
