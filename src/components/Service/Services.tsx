/**
 * Services Section
 * 
 * The services section for the cleaning service landing page
 */

import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: 'Базовая уборка',
    cleaners: '2 клинера',
    duration: 'до 2 часов',
    price: 'От 5000 DIN',
    features: [
      { text: 'Удаление пыли с мебели и техники' },
      { text: 'Сухая и влажная уборка полов' },
      { text: 'Замена постельного белья' },
      { text: 'Уборка санузлов' },
      { text: 'Уборка кухни' },
      { text: 'Вынос мусора' }
    ]
  },
  {
    title: 'Генеральная уборка',
    cleaners: '3-5 клинеров',
    duration: 'до 5 часов',
    price: 'От 8000 DIN',
    features: [
      { text: 'Удаление пыли и загрязнений с поверхностей мебели' },
      { text: 'Сухая и влажная уборка полов, включая труднодоступные места' },
      { text: 'Замена постельного белья' },
      { text: 'Уборка санузлов, включая удаление плесени' },
      { text: 'Уборка кухни, включая внутренние отделения' },
      { text: 'Мытье окон, вынос мусора' }
    ]
  },
  {
    title: 'Уборка после ремонта',
    cleaners: '4-6 клинеров',
    duration: 'до 5 часов',
    price: 'От 12000 DIN',
    features: [
      { text: 'Удаление строительной пыли и побелки' },
      { text: 'Профессиональная уборка с пылесосом' },
      { text: 'Очистка всех поверхностей от загрязнений' },
      { text: 'Мытье окон, очистка от краски' },
      { text: 'Уборка санузлов и кухни' },
      { text: 'Вынос мусора' }
    ]
  },
  {
    title: 'Поддерживающая уборка',
    cleaners: '1-2 клинера',
    duration: 'до 1.5 часов',
    price: 'От 3500 DIN',
    features: [
      { text: 'Быстрая уборка пыли' },
      { text: 'Влажная уборка полов' },
      { text: 'Поддержание чистоты санузлов' },
      { text: 'Легкая уборка кухни' },
      { text: 'Вынос мусора' }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="m-auto max-w-6xl py-16">
      <div className="services_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            cleaners={service.cleaners}
            duration={service.duration}
            price={service.price}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
}
