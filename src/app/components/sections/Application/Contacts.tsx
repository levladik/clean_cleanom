import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'

const Contacts = () => {
  return (
    <fieldset className="fieldset">
      {/* Contacts */}
      <legend className="fieldset-legend text-xl text-primary">Contact Information</legend>
      <div className="flex gap-2 items-center border-2 border-base-300 rounded-xl px-2 py-5">
        <Phone className="text-primary w-6 h-6" />
        <a
          className="text-sm underline"
          href="tel:+381611079692"
        >
          061 107 9692
        </a>
      </div>

      <div className="flex gap-2 items-center border-2 border-base-300 rounded-xl px-2 py-5">
        <Mail className="text-primary w-6 h-6" />
        <a
          className="text-sm underline"
          href="mailto:cleancleanom.rs@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          cleancleanom.rs@gmail.com
        </a>
      </div>

      <div className="flex gap-2 items-center border-2 border-base-300 rounded-xl px-2 py-5">
        <MapPin className="text-primary w-6 h-6" />
        <a
          className="text-sm underline"
          href="https://www.google.com/maps/search/?api=1&query=Belgrade%2C%20Kirovljeva%203"
          rel="noreferrer"
          target="_blank"
        >
          Belgrad, KIROVLJEVA 3
        </a>
      </div>
      <div className="divider"></div>
      {/* Socials */}
      <div className="flex justify-center gap-4">
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
      </div>
      <div className="divider"></div>
      {/* Hours */}
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Monday - Sunday:</span>
          <span className="font-medium">8:00 AM - 8:00 PM</span>
        </div>
      </div>
    </fieldset>
  )
}

export default Contacts
