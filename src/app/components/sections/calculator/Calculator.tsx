/**
 * @component Calculator
 * @purpose To calculate estimate cleaning price, based on area size, type of cleaning and included additional services.
 * @description Displays the service variants tabs, area picker, addons, total price.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

'use client'

import AddonsList from './AddonsList'
import AreaPicker from './AreaPicker'
import CleanTypePicker from './CleanTypePicker'
import TotalPrice from './TotalPrice'

const Calculator = () => {
  return (
    <div className="w-xl flex flex-col gap-3 border border-base-300 rounded-3xl px-3 py-5">
      <div className="divider divider-start text-sm my-0">Clean type</div>
      <CleanTypePicker />
      <div className="divider divider-start text-sm my-0">Area size</div>
      <AreaPicker />
      <div className="divider divider-start text-sm my-0">Additional services</div>
      <AddonsList />
      <TotalPrice />
    </div>
  )
}

export default Calculator
