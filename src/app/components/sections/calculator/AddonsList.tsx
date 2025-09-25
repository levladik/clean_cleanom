/**
 * @component AddonsList
 * @purpose To display and allow selection of additional cleaning services.
 * @description Renders a list of checkboxes for various add-on services with their corresponding prices.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'

import { useState, useEffect } from 'react'

import { addons } from '@/app/lib/calculator/cleaning-types'
import { useCalculatorStore } from '@/app/lib/calculator/store'

const AddonsList = () => {
  const { selectedType, selectedAddons, addAddon, removeAddon } = useCalculatorStore()
  const [addonStates, setAddonStates] = useState<Record<string, boolean>>({})

  // Initialize addon states based on selected type and selected addons
  useEffect(() => {
    const initialStates: Record<string, boolean> = {}
    addons.forEach((addon) => {
      // Check if addon is included in the selected cleaning type
      const isIncludedInType = selectedType?.includedServices?.includes(addon.id) || false
      // Check if addon is manually selected by user
      const isManuallySelected = selectedAddons.includes(addon.id)
      // An addon should be checked if it's either included in the type OR manually selected
      initialStates[addon.id] = isIncludedInType || isManuallySelected
    })
    setAddonStates(initialStates)
  }, [selectedType, selectedAddons])

  const handleAddonToggle = (addonId: string) => {
    const newState = !addonStates[addonId]
    setAddonStates((prev) => ({ ...prev, [addonId]: newState }))

    // Only manage manually selected addons (not those included in cleaning type)
    if (!selectedType?.includedServices?.includes(addonId)) {
      if (newState) {
        addAddon(addonId)
      } else {
        removeAddon(addonId)
      }
    }
  }

  return (
    <div>
      {addons.map((addon, idx) => (
        <div
          key={addon.id || idx}
          className="flex gap-2"
        >
          <input
            checked={addonStates[addon.id] || false}
            className="checkbox checked:checkbox-primary checkbox-xs mb-1"
            name="additional-service"
            onChange={() => handleAddonToggle(addon.id)}
            type="checkbox"
            value={addon.title}
          />
          <span className="label text-xs text-wrap mb-1">{addon.title}</span>
        </div>
      ))}
    </div>
  )
}

export default AddonsList
