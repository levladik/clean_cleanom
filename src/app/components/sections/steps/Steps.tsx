/**
 * @component Steps
 * @purpose To promote a cleaning service.
 * @description Illustrates the step-by-step process of booking a cleaning service.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import { BrushCleaning, ChevronDown, ChevronRight, CircleCheck, CalendarCheck, DollarSign, Leaf } from 'lucide-react'

const steps = [
  { title: 'Расчет', icon: DollarSign, desc: 'Калькулятор или звонок менеджера' },
  { title: 'Бронь', icon: CalendarCheck, desc: 'Выбор даты и времени онлайн' },
  { title: 'Уборка', icon: BrushCleaning, desc: 'Приезд команды с материалами' },
  { title: 'Результат', icon: CircleCheck, desc: 'Приемка и оплата' },
]

const Steps = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-32 w-full">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-12 h-12 text-primary mb-2" />
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
        </div>
        <p>Simple 4-step process to get your space sparkling clean. From calculation to completion, we make it easy.</p>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-4 gap-y-8 max-w-xl m-auto">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center"
            >
              <div className="flex items-center rounded-full text-xs tooltip tooltip-primary cursor-pointer">
                <div className="tooltip-content p-3">{step.desc}</div>
                <step.icon className="text-primary w-10 h-10" />
                <span className="ms-2 text-lg font-semibold">{step.title}</span>
                {index < steps.length - 1 && <ChevronRight className="hidden sm:block mt-1" />}
              </div>
              {index < steps.length - 1 && <ChevronDown className="block sm:hidden mt-5" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Steps
