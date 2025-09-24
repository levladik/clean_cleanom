/**
 * @component AddonsList
 * @purpose To display and allow selection of additional cleaning services.
 * @description Renders a list of checkboxes for various add-on services with their corresponding prices.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

import { addons } from '@/app/lib/calculator/cleaning-types'

const AddonsList = () => {
  return (
    <div>
      {addons.map((addon, idx) => (
        <div
          key={idx}
          className="flex gap-2"
        >
          <input
            className="checkbox checked:checkbox-primary checkbox-xs mb-1"
            name={addon.title}
            type="checkbox"
            value={addon.title}
          />
          <span className="label text-xs text-wrap mb-1">{addon.title}</span>
        </div>
      ))}
    </div>
  )
}

export default AddonsList
