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
    <section className="pb-16 md:pb-24 lg:pb-32 w-full">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-12 h-12 text-primary mb-2" />
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Simple 4-step process to get your space sparkling clean. From calculation to completion, we make it easy.
        </p>
      </div>
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald via-sage to-emerald transform -translate-y-1/2 z-0" />

        <div className="grid lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="group hover:shadow-medium transition-smooth hover:-translate-y-2">
                <div className="p-6 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>

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
      </div>
    </section>
  )
}
export default Steps
