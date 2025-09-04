/**
 * @component Steps
 * @purpose To promote a cleaning service.
 * @description Illustrates the step-by-step process of booking a cleaning service.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import { BrushCleaning, ChevronRight, CircleCheck, Clock, DollarSign } from 'lucide-react'

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
        <ul className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:items-center">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-center justify-start text-left sm:space-x-4"
            >
              <div className="flex items-center justify-center rounded-full text-xs tooltip tooltip-primary cursor-pointer">
                <div className="tooltip-content p-3">{step.desc}</div>
                <step.icon className="text-primary w-10 h-10" />
                <span className="ms-2 text-xl font-semibold">{step.title}</span>
              </div>
              {index < steps.length - 1 && <ChevronRight className="mx-5" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Steps
