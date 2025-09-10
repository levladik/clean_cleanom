/**
 * @component Services
 * @purpose To promote a cleaning service.
 * @description Displays a list of cleaning services with details and an option to view additional services.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS. Uses React state for toggling additional services.
 */
'use client'
import React, { useState } from 'react'

import ServiceCard from './ServiceCard'

const servicesData = [
  {
    title: 'Базовая',
    cleaners: '2 клинера',
    duration: 'до 2 часов',
    price: 'От 5 000 DIN',
    features: [
      { text: 'Удаление пыли с мебели и техники' },
      { text: 'Сухая и влажная уборка полов' },
      { text: 'Замена постельного белья' },
      { text: 'Уборка санузлов' },
      { text: 'Уборка кухни' },
      { text: 'Вынос мусора' },
      { text: 'Очистка от плесени', excluded: true },
      { text: 'Внутренние отделения мебели', excluded: true },
      { text: 'Удаление пыли со светильников', excluded: true },
      { text: 'Сложные загрязнения на мебели', excluded: true },
      { text: 'Мытье окон', excluded: true },
    ],
    popular: false,
  },
  {
    title: 'Генеральная',
    cleaners: '3-5 клинеров',
    duration: 'до 5 часов',
    price: 'От 8 000 DIN',
    features: [
      { text: 'Удаление пыли с мебели и техники' },
      { text: 'Сухая и влажная уборка полов ' },
      { text: 'Замена постельного белья' },
      { text: 'Уборка санузлов' },
      { text: 'Уборка кухни' },
      { text: 'Вынос мусора' },
      { text: 'Очистка от плесени' },
      { text: 'Внутренние отделения мебели' },
      { text: 'Удаление пыли со светильников' },
      { text: 'Сложные загрязнения на мебели' },
      { text: 'Мытье окон' },
    ],
    popular: true,
  },
  {
    title: 'После ремонта',
    cleaners: '4-6 клинеров',
    duration: 'до 5 часов',
    price: 'От 12 000 DIN',
    features: [
      { text: 'Удаление строительной пыли и побелки' },
      { text: 'Профессиональная уборка с пылесосом' },
      { text: 'Очистка поверхностей от загрязнений' },
      { text: 'Мытье окон' },
      { text: 'Очистка от краски' },
      { text: 'Уборка санузлов и кухни' },
      { text: 'Вынос мусора' },
    ],
    popular: false,
  },
]

const additionalServicesData = [
  { title: 'Уборка балконов и террас', price: '1000 дин за 10м2' },
  { title: 'Мытье окон', price: 'от 2 000 дин' },
  { title: 'Мытье стеклянных ограждений на террасах', price: 'от 1 000 дин' },
  { title: 'Мытье духовки, свч, холодильника, вытяжки', price: '1 000 дин/шт' },
  { title: 'Очистка кофемашин, чайников, грилей', price: 'от 1 000 дин' },
  { title: 'Удаление плесени и сложных загрязнений', price: 'от 1 000 дин' },
  { title: 'Привоз профессионального оборудования', price: 'от 3 000 дин' },
]

export default function Services() {
  const [showAdditionalServices, setShowAdditionalServices] = useState(false)

  const toggleAdditionalServices = () => {
    setShowAdditionalServices(!showAdditionalServices)
  }

  return (
    <section
      className="py-20 w-full"
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Our Cleaning
          <span className="text-primary"> Services</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Professional cleaning solutions for every need. From basic maintenance to deep renovation cleanup, we deliver exceptional results.
        </p>
      </div>
      <div className="services_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            cleaners={service.cleaners}
            duration={service.duration}
            features={service.features}
            popular={service.popular}
            price={service.price}
            title={service.title}
          />
        ))}
      </div>

      {/* Additional Services Dropdown */}
      <div className="mt-16 text-center">
        <button
          className="text-lg font-semibold text-primary hover:underline"
          onClick={toggleAdditionalServices}
        >
          {showAdditionalServices ? 'Скрыть дополнительные услуги' : 'Показать дополнительные услуги'}
        </button>
        {showAdditionalServices ? (
          <div className="flex flex-col gap-2 bg-base-300 p-6 mt-6 rounded-2xl">
            {additionalServicesData.map((service) => (
              <div
                key={service.title}
                className="flex items-center bg-base-100 p-3 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold text-foreground me-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.price}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
