/**
 * AddonUnitSelector Component
 * 
 * Component for selecting ammount of add-ons in the calculator
 */

import { AdditionalService } from "@/lib/calculator/types";

interface AddonUnitSelectorProps {
  included: boolean
  includedServices: AdditionalService[]
}

export default function AddonUnitSelector({ included }: AddonUnitSelectorProps) {

  return (
    <div className="addon-unit-selector">
      {included && (
        <>
          <span className="text-primary text-bold">Включено</span>
        </>
      )}
    </div>
  );
}
