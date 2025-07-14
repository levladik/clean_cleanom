'use client'
/**
 * Calculator Component
 *
 * The main calculator component for the cleaning service price calculator
 */

import { useState } from 'react'
import { RoomSizeSelector } from './RoomSizeSelector'
import ServiceSelector from './ServiceSelector'
import { calculateBasePrice, getServiceInfo } from '@/lib/calculator/pricing'
import { ServiceType } from '@/lib/calculator/types'
import AddonsSelector from './AddonsSelector'

export default function Calculator() {
  const [selectedService, setSelectedService] = useState(ServiceType.BASIC)
  const [roomSize, setRoomSize] = useState('0-50')

  const basePrice = calculateBasePrice(selectedService, roomSize) 
  const service = getServiceInfo(selectedService)

  return (
    <div className='calculator m-auto max-w-4xl'>
      <ServiceSelector setSelectedService={setSelectedService} />
      <RoomSizeSelector setRoomSize={setRoomSize} basePrice={basePrice}/>
      <AddonsSelector service={service}/>
    </div>
  );
}
