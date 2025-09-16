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
          className="join-item btn"
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
