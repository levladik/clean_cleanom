/**
 * @component Area Picker
 * @purpose To select area of cleaning.
 * @description Displays the variants of area to clean.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'
import { ChangeEvent, useState } from 'react'

const AreaPicker = () => {
  const areas = ['до 50m²', '50-70m²', '70-100m²', 'от 100m²']
  const [cleaningType, setCleaningType] = useState('до 50m²')

  const handleAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCleaningType(e.target.value)
  }

  return (
    <div className="join">
      {areas.map((area, idx) => (
        <input
          key={idx}
          aria-label={area}
          checked={cleaningType === area}
          className="join-item btn"
          name={area}
          onChange={handleAreaChange}
          type="radio"
          value={area}
        />
      ))}
    </div>
  )
}

export default AreaPicker
