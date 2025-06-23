'use client'
import React, { useState } from 'react'

export const RoomSizeSelector = () => {
  const [selectedService, setSelectedService] = useState('basic')
  return (
    <div className='calculator m-auto max-w-md'>
      <div className='w-full max-w-xs'>
        <input
          type='range'
          min={0}
          max='100'
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className='range range-primary'
        />
        <div className='flex justify-between px-2.5 mt-2 text-xs'>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
        <div className='flex justify-between px-2.5 mt-2 text-xs'>
          <span>0-50</span>
          <span>50-70</span>
          <span>70-100</span>
          <span>100-200</span>
          <span>200+</span>
        </div>
      </div>
    </div>
  )
}
