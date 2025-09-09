'use client'

import { Mail, Phone, User } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { ApplicationFormData } from './form.interface'

const Form = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    info: '',
  })

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
      info: '',
    })
    toast.success('Your application has been sent!')
  }

  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <form
        action="/api/submit"
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* Name (required) */}
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4 md:min-w-sm">
          <legend className="fieldset-legend text-xl text-primary">Quick Application</legend>
          <span className="label text-sm mb-2 text-wrap">Fill out the form and we&#39;ll contact you within 2 hours</span>
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
            className="btn btn-primary w-full rounded-xl mb-2"
            type="submit"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  )
}

export default Form
