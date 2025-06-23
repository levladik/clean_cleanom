'use client'
/**
 * Calculator Component
 *
 * The main calculator component for the cleaning service price calculator
 */

import { useState } from 'react'
import { RoomSizeSelector } from './RoomSizeSelector'
import ServiceSelector from './ServiceSelector'
import { calculateBasePrice } from '@/lib/calculator/pricing'

export default function Calculator() {
  const [selectedService, setSelectedService] = useState('basic')
  const [roomSize, setRoomSize] = useState('0-50')

  const finalPrice = calculateBasePrice(selectedService, parseInt(roomSize.split('-')[1] || '50')) 
  return (
    <div className='calculator m-auto max-w-4xl'>
      <ServiceSelector setSelectedService={setSelectedService} />
      <RoomSizeSelector setRoomSize={setRoomSize} finalPrice={finalPrice}/>
    </div>
  );
}
