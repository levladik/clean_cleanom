'use client';

/**
 * RoomSizeSelector Component
 *
 * A range slider component for selecting room sizes in square meters.
 */

import React, { useState } from 'react';

export const RoomSizeSelector = () => {
  const [selectedService, setSelectedService] = useState(50);
  return (
    <div className='m-auto max-w-md'>
      <p className='text-center text-3xl'>Сколько у вас квадратных метров?</p>
      <div className='flex items-center justify-center gap-4 my-4'>
        <select
          className='select select-primary select-lg w-min'
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option>0-50</option>
          <option>50-70</option>
          <option>70-100</option>
          <option>100-200</option>
          <option>200+</option>
        </select>
        <p className='text-2xl'>m<sup>2</sup></p>

        <div className='text-3xl text-bold'><span className='text-primary'>10 000</span> DIN</div>
      </div>
    </div>
  );
};
