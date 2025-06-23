'use client';

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
  return (
    <div className='w-fit m-auto'>
      <div className='flex items-center justify-center gap-4 my-4'>
        <select
          className='select select-primary select-lg w-min'
          onChange={(e) => setRoomSize?.(e.target.value)}
        >
          <option>0-50</option>
          <option>50-70</option>
          <option>70-100</option>
          <option>100-200</option>
          <option>200+</option>
        </select>
        <p className='text-2xl'>m<sup>2</sup></p>

        <div className='text-3xl text-bold'><span className='text-primary'>{basePrice}</span> DIN</div>
      </div>
    </div>
  );
};
