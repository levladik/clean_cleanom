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
import { ServiceType } from '@/lib/calculator/types'

export default function Calculator() {
  const [selectedService, setSelectedService] = useState(ServiceType.BASIC)
  const [roomSize, setRoomSize] = useState('0-50')

  const basePrice = calculateBasePrice(selectedService, roomSize) 
  console.log('max area:', parseInt(roomSize.split('-')[1] || '201'))

  return (
    <div className='calculator m-auto max-w-4xl'>
      <ServiceSelector setSelectedService={setSelectedService} />
      <RoomSizeSelector setRoomSize={setRoomSize} basePrice={basePrice}/>
    </div>
  );
}
