'use client';

import { AREA_TIERS } from "@/lib/calculator/pricing";

/**
 * RoomSizeSelector Component
 *
 * A range slider component for selecting room sizes in square meters.
 */


interface RoomSizeSelectorProps {
  setRoomSize?: (size: string) => void
  basePrice?: number
}

export const RoomSizeSelector = ({ setRoomSize, basePrice }: RoomSizeSelectorProps) => {

  const areas = AREA_TIERS

  return (
    <div className='w-fit m-auto'>
      <div className='flex items-center justify-center gap-4 my-4'>
        <select
          className='select select-primary select-lg w-min'
          onChange={(e) => setRoomSize?.(e.target.value)}
        >
          {areas.map((area) => (
            <option key={area.label} value={area.label}>
              {area.label}
            </option>
          ))}
        </select>
        <p className='text-2xl'>m<sup>2</sup></p>

        <div className='text-3xl text-bold'><span className='text-primary'>{basePrice}</span> DIN</div>
      </div>
    </div>
  );
};
