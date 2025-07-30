/**
 * ServiceCard Component
 * 
 * Reusable service card component for displaying cleaning service information
 */

import React from 'react';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  cleaners: string;
  duration: string;
  price: string;
  features: ServiceFeature[];
}

export default function ServiceCard({ title, cleaners, duration, price, features }: ServiceCardProps) {
  return (
    <div className="service_card bg-base-100 p-4 rounded-lg flex flex-col gap-2 justify-center items-center">
      <h2 className="text-2xl font-bold tracking-wide opacity-70">{title}</h2>
      <div className='flex gap-2 mb-5'>
        <span className="badge badge-md bg-base-300">{cleaners}</span>
        <span className="badge badge-md bg-base-300">{duration}</span>
      </div>
      <button className='btn btn-accent mb-5'>{price}</button>

      <div>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-primary size-4">
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clipRule="evenodd"></path>
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
