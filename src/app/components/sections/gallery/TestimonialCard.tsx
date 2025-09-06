import Image from 'next/image'

const TestimonialCard = ({ item, idx }) => {
  return (
    <div className="embla__slide card w-full group overflow-hidden hover:shadow-large transition-smooth">
      <div className="relative overflow-hidden">
        <div className="relative h-100">
          <Image
            alt="title"
            className="w-full object-cover group-hover:scale-105 transition-smooth"
            src={item.image}
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-smooth">
          <div className="p-8">
            <blockquote className="text-lg text-muted-foreground italic mb-4">{item.testimonial}</blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold">{item.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialCard
