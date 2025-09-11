/**
 * @component Services
 * @purpose To promote a cleaning service.
 * @description Displays a list of cleaning services with details and an option to view additional services.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS. Uses React state for toggling additional services.
 */
'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'

import { AdditionalService, ServiceCardProps, ServicesProps } from './service.interface'
import ServiceCard from './ServiceCard'

const defaultServicesData: ServiceCardProps[] = [
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

const defaultAdditionalServicesData: AdditionalService[] = [
  { title: 'Уборка балконов и террас', price: '1000 дин за 10м2' },
  { title: 'Мытье окон', price: 'от 2 000 дин' },
  { title: 'Мытье стеклянных ограждений на террасах', price: 'от 1 000 дин' },
  { title: 'Мытье духовки, свч, холодильника, вытяжки', price: '1 000 дин/шт' },
  { title: 'Очистка кофемашин, чайников, грилей', price: 'от 1 000 дин' },
  { title: 'Удаление плесени и сложных загрязнений', price: 'от 1 000 дин' },
  { title: 'Привоз профессионального оборудования', price: 'от 3 000 дин' },
]

export default function Services({
  servicesData = defaultServicesData,
  additionalServicesData = defaultAdditionalServicesData,
}: ServicesProps) {
  const [showAdditionalServices, setShowAdditionalServices] = useState(false)

  const toggleAdditionalServices = () => {
    setShowAdditionalServices(!showAdditionalServices)
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', watchDrag: true })

  // Embla Carousel
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section
      className="pt-20 w-full max-w-6xl mx-auto"
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-12 h-12 text-primary mb-2" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Cleaning
            <span className="text-primary"> Services</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Professional cleaning solutions for every need. From basic maintenance to deep renovation cleanup, we deliver exceptional results.
        </p>
      </div>

      <div
        ref={emblaRef}
        className="relative overflow-hidden mx-auto rounded-xl"
      >
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 py-6">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="flex-none px-3 pb-8 min-w-full"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="absolute md:hidden bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
          {servicesData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${idx === selectedIndex ? 'bg-primary w-6' : 'bg-gray-400/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex md:hidden justify-center gap-4 mt-2">
        <button
          className="btn btn-primary rounded-full rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <button
          className="btn btn-primary rounded-full rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          <ChevronRight className="w-10 h-10" />
        </button>
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
                <h3 className="text-lg font-bold me-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.price}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
