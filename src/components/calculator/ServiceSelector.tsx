/**
 * ServiceSelector Component
 *
 * Component for selecting a cleaning service in the calculator
 */

import { services } from '@/lib/calculator/pricing'
import { ServiceType } from '@/lib/calculator/types';
import React from 'react'

interface ServiceSelectorProps {
  setSelectedService?: (service: ServiceType) => void
}

export default function ServiceSelector({ setSelectedService }: ServiceSelectorProps) {
  const serviceOptions = services;
  return (
    <div className='service-selector w-fit m-auto'>
      <div
        role='tablist'
        className='tabs tabs-lift'
      >
        {serviceOptions.map((service) => {
          return (
            <a
              role='tab'
              className='tab'
              key={service.id}
              onClick={() => {setSelectedService?.(service.id)}}
            >
              {service.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
