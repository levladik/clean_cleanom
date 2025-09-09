import { Globe, Leaf, Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-primary-content">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">
                Clean <span className="text-primary">Cleanom</span>
              </span>
            </div>

            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Professional cleaning services in Belgrade and surrounding areas. <br />
              Quality guaranteed, experienced staff, and flexible scheduling for homes and businesses.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
              >
                <FaInstagram className="w-8 h-8 text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
              >
                <FaTelegramPlane className="w-8 h-8 text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
              >
                <FaWhatsapp className="w-8 h-8 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  className="hover:text-primary transition-smooth"
                  href="#services"
                >
                  Basic Cleaning
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-smooth"
                  href="#services"
                >
                  General Cleaning
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-smooth"
                  href="#services"
                >
                  Post-Renovation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                className="flex items-center gap-3 text-primary-foreground/80 hover:underline"
                href="tel:+381611079692"
                rel="noreferrer"
                target="_blank"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>061 107 9692</span>
              </a>
              <a
                className="flex items-center gap-3 text-primary-foreground/80 hover:underline"
                href="mailto:cleancleanom.rs@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>cleancleanom.rs@gmail.com</span>
              </a>
              <a
                className="flex items-center gap-3 text-primary-foreground/80 hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=Belgrade%2C%20Kirovljeva%203"
                rel="noreferrer"
                target="_blank"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kirovljeva 3, Belgrade</span>
              </a>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-primary-foreground/60 text-sm">© {new Date().getFullYear()} Clean Cleanom. All rights reserved.</div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              className="hover:underline hover:text-primary transition-smooth"
              href="#privacy"
            >
              Privacy Policy
            </a>
            <a
              className="hover:underline hover:text-primary transition-smooth"
              href="#terms"
            >
              Terms of Service
            </a>
            <a
              className="hover:underline hover:text-primary transition-smooth"
              href="#booking-rules"
            >
              Booking Rules
            </a>

            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <button className="h-auto p-0 hover:underline hover:text-primary cursor-pointer text-sm">EN</button>
              <span className="text-primary-foreground/40">|</span>
              <button className="h-auto p-0 hover:underline hover:text-primary cursor-pointer text-sm">SR</button>
              <span className="text-primary-foreground/40">|</span>
              <button className="h-auto p-0 hover:underline hover:text-primary cursor-pointer text-sm">RU</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
