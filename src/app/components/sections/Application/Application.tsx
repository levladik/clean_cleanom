import Contacts from './Contacts'
import Form from './Form'

const Application = () => {
  return (
    <section className="flex flex-col items-center my-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Get In
          <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to transform your space? Contact us today for a free quote or to schedule your cleaning service.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="w-full flex-1">
          <Contacts />
        </div>
        <div className="w-full flex-1">
          <Form />
        </div>
      </div>
    </section>
  )
}
export default Application
