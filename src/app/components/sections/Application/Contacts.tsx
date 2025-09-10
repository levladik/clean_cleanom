import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contacts = () => {
  return (
    <fieldset className="fieldset">
      <div className="mb-6">
        <p className="text-sm md:text-lg opacity-80">
          Ready to transform your space? Contact us today for a free quote or to schedule your cleaning service.
        </p>
      </div>
      {/* Contacts */}
      <legend className="fieldset-legend text-xl text-primary">Contact Information</legend>
      <div className="flex gap-2 items-center ">
        <Phone className="text-primary w-7 h-7 md:w-9 h-9 mr-3" />
        <div className="text-sm md:text-lg">
          <p className="text-bold opacity-60">Phone number</p>
          <a href="tel:+381611079692">061 107 9692</a>
        </div>
      </div>

      <div className="flex gap-2 items-center ">
        <Mail className="text-primary w-7 h-7 md:w-9 h-9 mr-3" />
        <div className="text-sm md:text-lg">
          <p className="text-bold opacity-60">E-mail</p>
          <a
            href="mailto:cleancleanom.rs@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            cleancleanom.rs@gmail.com
          </a>
        </div>
      </div>

      <div className="flex gap-2 items-center ">
        <MapPin className="text-primary w-7 h-7 md:w-9 h-9 mr-3" />
        <div className="text-sm md:text-lg">
          <p className="text-bold opacity-60">Address</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Belgrade%2C%20Kirovljeva%203"
            rel="noreferrer"
            target="_blank"
          >
            Belgrad, KIROVLJEVA 3
          </a>
        </div>
      </div>
      {/* <div className="divider"></div> */}
      {/* Socials */}
      {/* <div className="flex justify-center gap-4">
        <a
          href="#"
          target="blank"
        >
          <FaInstagram className="w-8 h-8 text-primary" />
        </a>
        <a
          href="#"
          target="blank"
        >
          <FaTelegramPlane className="w-8 h-8 text-primary" />
        </a>
        <a
          href="#"
          target="blank"
        >
          <FaWhatsapp className="w-8 h-8 text-primary" />
        </a>
      </div> */}
      <div className="divider"></div>
      {/* Hours */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-center gap-2">
          <span className="text-muted-foreground">Monday - Sunday:</span>
          <span className="font-medium">8:00 AM - 8:00 PM</span>
        </div>
      </div>
    </fieldset>
  )
}

export default Contacts
