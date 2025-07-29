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
import AddonsList from './AddonsList'

export default function Calculator() {
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({})

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId]
    }))
  }
  const [selectedService, setSelectedService] = useState(ServiceType.BASIC)
  const [roomSize, setRoomSize] = useState('0-50')

  const basePrice = calculateBasePrice(selectedService, roomSize) 
  const service = getServiceInfo(selectedService)
  if (!service) {
    throw new Error(`Service with ID ${selectedService} not found`)
  }

  return (
    <div className='calculator m-auto max-w-4xl'>
      <ServiceSelector setSelectedService={setSelectedService} />
      <RoomSizeSelector setRoomSize={setRoomSize} basePrice={basePrice}/>
      <AddonsList 
        service={service}
        selectedAddons={selectedAddons}
        onToggleAddon={toggleAddon}
      />
    </div>
  );
}
