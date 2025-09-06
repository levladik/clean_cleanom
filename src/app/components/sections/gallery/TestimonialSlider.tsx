import Image from 'next/image'

export const TestimonialSlider = ({ user }) => {
  return (
    <div
      className="relative h-80 rounded-xl overflow-hidden group"
      style={{
        backgroundImage: `url(${user.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
        <blockquote className="text-white text-lg font-medium italic mb-4">“{user.quote}”</blockquote>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
            <Image
              alt={user.name}
              className="object-cover"
              height={48}
              src={user.picture}
              width={48}
            />
          </div>
          <span className="text-white font-semibold">{user.name}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
