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
    <fieldset className="w-auto max-w-xl m-auto flex flex-col items-center gap-3 border border-base-300 rounded-3xl px-3 py-5 shadow-2xl">
      {/* <h2 className="flex items-center gap-1 text-xl">
        <CalculatorIcon className="text-primary" />
        Cleaning Calculator
      </h2> */}
      <legend className="fieldset-legend text-xl text-primary ms-3">Price Calculator</legend>
      <div className="divider text-xs m-0 opacity-70">Choose Cleaning Type</div>
      <CleanTypePicker />
      <div className="divider text-xs m-0 opacity-70">Choose Area</div>
      <AreaPicker />
      <div className="divider text-xs m-0 opacity-70">Choose Additional Service</div>
      <AddonsList />
      <TotalPrice />
      <div className="divider m-0"></div>
      <button className="btn btn-lg btn-accent rounded-full">Order</button>
    </fieldset>
  )
}

export default Calculator
