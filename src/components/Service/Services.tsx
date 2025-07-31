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
      { text: 'Мытье окон', excluded: true }
    ]
  },
  {
    title: 'Генеральная уборка',
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
      { text: 'Мытье окон' }
    ]
  },
  {
    title: 'Уборка после ремонта',
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
      { text: 'Вынос мусора' }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="m-auto max-w-5xl py-16">
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
