/**
 * @component AreaPicker
 * @purpose To select the area size for cleaning services.
 * @description Displays radio buttons for different area ranges to choose from.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'
import { ChangeEvent, useState } from 'react'

import { areas } from '@/app/lib/calculator/cleaning-types'

const AreaPicker = () => {
  const [cleaningArea, setCleaningArea] = useState<string | null>(null)

  const handleAreaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCleaningArea(e.target.value)
  }

  return (
    <div className="join">
      {areas.map((area, idx) => (
        <input
          key={idx}
          aria-label={area}
          checked={cleaningArea === area}
          className="join-item btn btn-xs sm:btn-sm"
          name="cleaning-area"
          onChange={handleAreaChange}
          type="radio"
          value={area}
        />
      ))}
    </div>
  )
}

export default AreaPicker
