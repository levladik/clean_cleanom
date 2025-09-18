/**
 * @component CleanTypePicker
 * @purpose To select the type of cleaning service.
 * @description Provides radio button tabs for choosing between Base, Deep, and Renovation cleaning options.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'
import { useState } from 'react'

const CleanTypePicker = () => {
  const tabs = [
    {
      name: 'Base',
      tooltip:
        'Cухая и влажная уборка помещений (удаление пыли и загрязнений с открытых поверхностей), уборка санузлов и кухни (открытые поверхности), замена постельного белья, вынос мусора. ',
    },
    {
      name: 'Deep',
      tooltip:
        'Cухая и влажная уборка помещений (включая труднодоступные места, светильники и внутренние поверхности мебели), уборка санузлов и кухни (включая удаление сложных загрязнений, очистку труднодоступных мест и внутренних отделений шкафчиков), удаление паутины и плесени, мытье окон, замена постельного белья, вынос мусора.',
    },
    {
      name: 'Rennovation',
      tooltip:
        'Очистка поверхностей от строительной пыли и побелки, сухая и влажная уборка помещений (включая труднодоступные места и внутренние отделения мебели), уборка санузлов и кухни (включая сложные загрязнения), мытье окон (включая удаление следов клея и краски), вынос некрупногабаритного мусора. ',
    },
  ]
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
