/**
 * @component Features
 * @purpose To promote a cleaning service.
 * @description Displays the advantages of the cleaning service.
 * @techContext Built with Next.js (App Router), Tailwind CSS, and DaisyUI, leveraging WordPress as a headless CMS.
 */
import { DollarSign, Clock, Shield, Users, Calendar, Repeat, Building2, Leaf } from 'lucide-react'

const advantages = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: (
      <>
        Fixed <span className="text-primary">Prices</span>
      </>
    ),
    description: 'No extra charges for time - transparent pricing',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: (
      <>
        Fixed <span className="text-primary">Time</span>
      </>
    ),
    description: 'Work completed within promised timeframe',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: (
      <>
        <span className="text-primary">Professional</span> Equipment
      </>
    ),
    description: 'Guaranteed quality with professional cleaning agents',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: (
      <>
        <span className="text-primary">Experienced</span> Staff
      </>
    ),
    description: 'Careful selection and professional training',
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: (
      <>
        <span className="text-primary">Flexible</span> Schedule
      </>
    ),
    description: 'Cleaning at your convenient time',
  },
  {
    icon: <Repeat className="w-5 h-5" />,
    title: (
      <>
        <span className="text-primary">Regular</span> Bookings
      </>
    ),
    description: 'Recurring service with special discounts',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: (
      <>
        Business <span className="text-primary">Solutions</span>
      </>
    ),
    description: 'Working with legal entities, invoice payments',
  },
]

const Features = () => {
  return (
    <section
      className="pt-20 w-full"
      id="thefeatures"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-12 h-12 text-primary mb-2" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why
              <span className="text-primary"> Clean Cleanom</span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional cleaning services with guaranteed results, professional approach, and complete customer satisfaction.
          </p>
        </div>

        {/* Advantages Grid */}
        <div
          className="
            mb-12 grid gap-x-4 gap-y-10 text-center
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative border-2 border-base-300 rounded-xl px-6 pb-3 pt-8 shadow-md"
            >
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 badge badge-primary rounded-full p-2 ms-auto">
                {advantage.icon}
              </span>
              <p className="text-xl/5 font-bold mb-3">{advantage.title}</p>
              <p className="text-md">{advantage.description}</p>
            </div>
          ))}

          {/* Stats block */}
          <div className="stats stats-vertical border-2 border-base-300 shadow-md">
            <div className="stat flex items-center justify-center py-1 px-2">
              <div className="stat-value text-xl text-primary">1 000+</div>
              <div className="stat-title text-sm">Satisfied Customers</div>
            </div>

            <div className="stat flex items-center justify-center py-1 px-2">
              <div className="stat-value text-xl text-primary">3+</div>
              <div className="stat-title text-sm">Years Experience</div>
            </div>

            <div className="stat flex items-center justify-center py-1 px-2">
              <div className="stat-value text-xl text-primary">99%</div>
              <div className="stat-title text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
