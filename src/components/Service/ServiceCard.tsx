/**
 * ServiceCard Component
 *
 * Reusable service card component for displaying cleaning service information
 */

import React from 'react';

interface ServiceFeature {
  text: string;
  excluded?: boolean;
}

interface ServiceCardProps {
  title: string;
  cleaners: string;
  duration: string;
  price: string;
  features: ServiceFeature[];
}

export default function ServiceCard({
  title,
  cleaners,
  duration,
  price,
  features,
}: ServiceCardProps) {
  return (
    <div className='service_card bg-base-100 p-4 rounded-lg flex flex-col gap-2 justify-start items-start'>

      <div className='flex flex-col'>
        <h4 className='font-bold tracking-wide opacity-50 mb-2'>{title}</h4>
        <div className='flex gap-2 mb-5'>
          <span className='badge badge-md bg-base-300'>{cleaners}</span>
          <span className='badge badge-md bg-base-300'>{duration}</span>
        </div>
        <div>
          <span className='text-4xl font-black'>{price}</span>
        </div>
      </div>

      <button className='btn btn-accent mb-5'>Заказать</button>

      <div>
        <ul className='space-y-2 text-sm'>
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 ${feature.excluded ? 'opacity-60' : ''}`}
            >
              {feature.excluded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="text-error size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='text-primary size-4'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
