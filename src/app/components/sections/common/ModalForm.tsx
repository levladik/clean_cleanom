'use client'

import { Mail, Phone, User } from 'lucide-react'
import React, { useState, forwardRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { ApplicationFormData } from '../application/quick-application-form.interface'

const ModalForm = forwardRef<HTMLDialogElement>((_, ref) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    cleaningType: 'Генеральная',
    info: '',
  })

  const dialogRef = React.useRef<HTMLDialogElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    if (!form.checkValidity()) {
      form.reportValidity()

      return
    }

    console.log(formData)
    form.reset()
    setFormData({
      name: '',
      email: '',
      phone: '',
      cleaningType: 'Генеральная',
      info: '',
    })
    toast.success('Your application has been sent!')

    // Close the modal after successful submission
    dialogRef.current?.close()
  }

  // Forward the ref to the parent
  React.useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(dialogRef.current)
      } else {
        ref.current = dialogRef.current
      }
    }
  }, [ref])

  return (
    <dialog
      ref={dialogRef}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <div>
          <Toaster position="top-right" />
        </div>
        <form
          action="/api/submit"
          method="POST"
          onSubmit={handleSubmit}
        >
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box p-4">
            <span className="label text-sm mb-2 text-wrap">Fill out the form and we&#39;ll contact you within 2 hours</span>
            {/* Name (required) */}
            <label className="input validator w-full">
              <User className="opacity-50" />
              <input
                minLength={2}
                name="name"
                onChange={handleChange}
                placeholder="Your name"
                type="text"
                value={formData.name}
                required
              />
            </label>
            <span className="validator-hint mt-0">Name is required and must be at least 2 characters.</span>

            {/* Phone (required) */}
            <label className="input validator w-full">
              <Phone className="opacity-50" />
              <input
                name="phone"
                onChange={handleChange}
                pattern="\+?\-?\(?\)?\d{6,15}"
                placeholder="+1234567890"
                type="tel"
                value={formData.phone}
                required
              />
            </label>
            <span className="validator-hint mt-0">Phone is required (6–15 numbers).</span>

            {/* Email */}
            <label className="input validator w-full">
              <Mail className="opacity-50" />
              <input
                name="email"
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="@example@email.com"
                type="email"
                value={formData.email}
                required
              />
            </label>
            <span className="validator-hint mt-0">Please enter a valid email.</span>

            {/* Info (optional) */}
            <textarea
              className="input textarea text-wrap mb-6 p-2 h-24 w-full"
              name="info"
              onChange={handleChange}
              placeholder="Any additional information you want to provide"
              value={formData.info}
            ></textarea>

            <button
              className="btn btn-primary w-full rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 mb-2"
              type="submit"
            >
              Send
            </button>
          </fieldset>
        </form>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">✕</button>
        </form>
      </div>
    </dialog>
  )
})

ModalForm.displayName = 'ModalForm'

export default ModalForm
