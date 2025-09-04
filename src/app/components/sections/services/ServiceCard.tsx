/**
 * @component ServiceCard
 * @purpose To promote a cleaning service.
 * @description Displays individual cleaning service details including title, cleaners, duration, price, features, and a popular tag.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import clsx from 'clsx'
import { Circle, CircleCheck, Clock, Users } from 'lucide-react'

export default function ServiceCard({ title, cleaners, duration, price, features, popular }) {
  return (
    <div
      className={clsx('relative rounded-xl bg-base-100 border-2 border-base-300 p-4 flex flex-col gap-2 justify-start items-start', {
        'ring-2 ring-primary border-none': popular,
      })}
    >
      {popular ? <span className="badge badge-accent absolute p-3 -top-4 left-1/2 transform -translate-x-1/2">Most popular</span> : null}
      <div className="flex flex-col mb-5">
        <h4 className="text-2xl font-bold tracking-wide mb-2">{title}</h4>
        <div className="flex gap-2 mb-2">
          <span className="badge badge-md">
            <Users className="w-4 h-4" />
            {cleaners}
          </span>
          <span className="badge badge-md">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
        </div>
        <div>
          <span className="text-2xl font-black">{price}</span>
        </div>
      </div>

      <button className="btn btn-primary btn-lg w-full uppercase rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 mb-3">Заказать</button>

      <div>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li
              key={index}
              className={clsx('flex items-center gap-2', {
                'opacity-60': feature.excluded,
              })}
            >
              {feature.excluded ? <Circle className="w-4 h-4" /> : <CircleCheck className="w-4 h-4 text-primary" />}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
