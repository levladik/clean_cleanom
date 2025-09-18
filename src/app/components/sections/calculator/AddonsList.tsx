/**
 * @component AddonsList
 * @purpose To display and allow selection of additional cleaning services.
 * @description Renders a list of checkboxes for various add-on services with their corresponding prices.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */

import { AdditionalService } from '../services/service.interface'

const AddonsList = () => {
  const additionalServicesData: AdditionalService[] = [
    { title: 'Уборка балконов и террас', price: '1000 дин за 10м2' },
    { title: 'Мытье окон', price: 'от 2 000 дин' },
    { title: 'Мытье стеклянных ограждений на террасах', price: 'от 1 000 дин' },
    { title: 'Мытье духовки, свч, холодильника, вытяжки', price: '1 000 дин/шт' },
    { title: 'Очистка кофемашин, чайников, грилей', price: 'от 1 000 дин' },
    { title: 'Удаление плесени и сложных загрязнений', price: 'от 1 000 дин' },
    { title: 'Привоз профессионального оборудования', price: 'от 3 000 дин' },
  ]

  return (
    <div>
      {additionalServicesData.map((addon, idx) => (
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
