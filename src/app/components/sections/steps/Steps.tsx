/**
 * @component Steps
 * @purpose To promote a cleaning service.
 * @description Illustrates the step-by-step process of booking a cleaning service.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import { BrushCleaning, ChevronDown, ChevronRight, CircleCheck, Clock, DollarSign } from 'lucide-react'

const steps = [
  { title: 'Расчет', icon: DollarSign, desc: 'Калькулятор или звонок менеджера' },
  { title: 'Бронь', icon: Clock, desc: 'Выбор даты и времени онлайн' },
  { title: 'Уборка', icon: BrushCleaning, desc: 'Приезд команды с материалами' },
  { title: 'Результат', icon: CircleCheck, desc: 'Приемка и оплата' },
]

const Steps = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-32 w-full">
      <div className="">
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
