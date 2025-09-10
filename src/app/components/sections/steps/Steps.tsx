/**
 * @component Steps
 * @purpose To promote a cleaning service.
 * @description Illustrates the step-by-step process of booking a cleaning service.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import { BrushCleaning, CircleCheck, CalendarCheck, DollarSign, Leaf, ArrowRight } from 'lucide-react'

const steps = [
  { title: 'Расчет', icon: DollarSign, desc: 'Калькулятор или звонок менеджера' },
  { title: 'Бронь', icon: CalendarCheck, desc: 'Выбор даты и времени' },
  { title: 'Уборка', icon: BrushCleaning, desc: 'Приезд команды с материалами' },
  { title: 'Результат', icon: CircleCheck, desc: 'Приемка и оплата' },
]

const Steps = () => {
  return (
    <section
      className="pt-20 max-w-xxl m-auto"
      id="steps"
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-12 h-12 text-primary mb-2" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Simple 4-step process to get your space sparkling clean. From calculation to completion, we make it easy.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-3 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative"
          >
            <div className="group hover:shadow-medium hover:-translate-y-1 transition-smooth mb-3">
              <div className="p-2 sm:p-4 md:p-6 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-3">{step.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>

            {/* Arrow for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                <ArrowRight className="w-6 h-6 text-sage" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Steps
