/**
 * @component Calculator
 * @purpose To calculate estimate cleaning price, based on area size, type of cleaning and included additional services.
 * @description Displays the service variants tabs, area picker, addons, total price.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'
import { useState } from 'react'

import AreaPicker from './AreaPicker'

const tabs = ['Base', 'Deep', 'Rennovation']

const Calculator = () => {
  const [activeTab, setActiveTab] = useState('Deep')

  return (
    <div className="bg-base-300 w-xl">
      {/* Tabs */}
      <div
        className="tabs tabs-lift"
        role="tablist"
      >
        {tabs.map((tab, idx) => (
          <a
            key={idx}
            className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(tab)
            }}
          >
            {tab}
          </a>
        ))}
      </div>
      <AreaPicker />
    </div>
  )
}

export default Calculator
