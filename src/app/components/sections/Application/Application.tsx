import Contacts from './Contacts'
import Form from './Form'

const Application = () => {
  return (
    <section className="max-w-4xl m-auto items-center my-16">
      <h2 className="text-center text-4xl lg:text-5xl font-bold text-foreground mb-18">
        Get In
        <span className="text-primary"> Touch</span>
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-20">
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
