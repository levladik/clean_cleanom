/**
 * @component CleanTypePicker
 * @purpose To select the type of cleaning service.
 * @description Provides radio button tabs for choosing between Base, Deep, and Renovation cleaning options.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'
import { useState } from 'react'

import { cleaningType } from '@/app/lib/calculator/cleaning-types'

const CleanTypePicker = () => {
  const cleaningTypes = Object.values(cleaningType)

  const tabs = cleaningTypes.map((type) => ({
    name: type.name,
    tooltip: type.description,
  }))

  const [activeTab, setActiveTab] = useState('Deep')

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
            checked={activeTab === tab.name}
            className="join-item btn btn-xs sm:btn-sm"
            name={tab.name}
            onChange={(e) => setActiveTab(e.target.value)}
            type="radio"
            value={tab.name}
          />
        </div>
      ))}
    </div>
  )
}

export default CleanTypePicker
