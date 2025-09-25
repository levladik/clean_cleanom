/**
 * @component CleanTypePicker
 * @purpose To select the type of cleaning service.
 * @description Provides radio button tabs for choosing between Base, Deep, and Renovation cleaning options.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'

import { cleaningTypes } from '@/app/lib/calculator/cleaning-types'
import { useCalculatorStore } from '@/app/lib/calculator/store'

const CleanTypePicker = () => {
  const cleaningType = Object.values(cleaningTypes) // [{…}, {…}, {…}]

  const tabs = cleaningType.map((type) => ({
    type, // {...}
    name: type.name, // 'Base'
    tooltip: type.description, // 'Cухая и влажная уборка помещений...'
  }))

  const { selectedType, setSelectedType } = useCalculatorStore() // {...}

  return (
    <div className="join">
      {/* Tabs */}
      {tabs.map((tab, idx) => (
        <div
          key={idx}
          className="tooltip tooltip-bottom"
          data-tip={tab.tooltip}
        >
          <input
            aria-label={tab.name}
            checked={selectedType === tab.type}
            className="join-item btn btn-xs sm:btn-sm"
            name={tab.name}
            onChange={() => setSelectedType(tab.type)}
            type="radio"
            value={tab.name}
          />
        </div>
      ))}
    </div>
  )
}

export default CleanTypePicker
