import { Leaf } from 'lucide-react'

import Contacts from './Contacts'
import Form from './Form'

const Application = () => {
  return (
    <section
      className="py-20 w-full max-w-4xl m-auto items-center"
      id="contacts"
    >
      <div className="flex items-center justify-center gap-2 mb-18">
        <Leaf className="w-12 h-12 text-primary" />
        <h2 className="text-4xl lg:text-5xl font-bold">
          Get In
          <span className="text-primary"> Touch</span>
        </h2>
      </div>
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
