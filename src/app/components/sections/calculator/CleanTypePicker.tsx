/**
 * @component CleanTypePicker
 * @purpose To select the type of cleaning service.
 * @description Provides radio button tabs for choosing between Base, Deep, and Renovation cleaning options.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'
import { useState } from 'react'

const CleanTypePicker = () => {
  const tabs = ['Base', 'Deep', 'Rennovation']
  const [activeTab, setActiveTab] = useState('Deep')

  return (
    <div className="join">
      {/* Tabs */}
      {tabs.map((tab, idx) => (
        <input
          key={idx}
          aria-label={tab}
          checked={activeTab === tab}
          className="join-item btn btn-xs sm:btn-sm"
          name={tab}
          onChange={(e) => setActiveTab(e.target.value)}
          type="radio"
          value={tab}
        />
      ))}
    </div>
  )
}

export default CleanTypePicker
