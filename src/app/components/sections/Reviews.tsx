import { Star } from 'lucide-react'

const Reviews = () => {
  return (
    <div className="grid grid-cols-2 w-full m-auto md:grid-cols-4 items-center gap-6 rounded-xl">
      <div className="text-center">
        <div className="p-6">
          <div className="text-3xl font-bold text-emerald mb-2">4.8</div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-accent"
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground">Average Rating</div>
        </div>
      </div>

      <div className="text-center">
        <div className="p-6">
          <div className="text-3xl font-bold text-emerald mb-2">1000+</div>
          <div className="text-sm text-muted-foreground">Total Reviews</div>
        </div>
      </div>

      <div className="text-center">
        <div className="p-6">
          <div className="text-3xl font-bold text-emerald mb-2">99%</div>
          <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
        </div>
      </div>

      <div className="text-center">
        <div className="p-6">
          <div className="text-3xl font-bold text-emerald mb-2">75%</div>
          <div className="text-sm text-muted-foreground">Repeat Customers</div>
        </div>
      </div>
    </div>
  )
}
export default Reviews
