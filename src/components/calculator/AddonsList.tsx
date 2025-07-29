/**
 * AddonList Component
 * 
 * Component for selecting service add-ons in the calculator
 */

import { additionalServices } from '@/lib/calculator/pricing';
import { ServicePricing } from '@/lib/calculator/types';

interface AddonsListProps {
  service: ServicePricing
  selectedAddons: Record<string, boolean>
  onToggleAddon: (addonId: string) => void
}

export default function AddonsList({ service, selectedAddons, onToggleAddon }: AddonsListProps) {

  const includedServices = service.includedServices

  return (
    <div className="addons-selector">
      <ul>
        {additionalServices.map((addon) => {
          const isAddonIncluded = includedServices?.includes(addon.id)
          const checked = selectedAddons[addon.id] || isAddonIncluded

          return (
            <li key={addon.id} className="addon-item">
              <label className="flex items-center gap-2">
                <input 
                  className='accent-primary'
                  type="checkbox" 
                  value={addon.id} 
                  checked={checked}
                  onChange={() => onToggleAddon(addon.id)}
                />
                <span>{addon.name}</span>
                {isAddonIncluded && <span className="text-primary text-bold">Включено</span>}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
