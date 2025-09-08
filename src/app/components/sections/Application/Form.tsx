import { User, Mail, Phone } from 'lucide-react'
import React from 'react'

const Form = () => {
  return (
    <fieldset className="fieldset bg-base-100 border-base-300 rounded-xl w-xs border p-4">
      <legend className="fieldset-legend">Application Form</legend>

      <label className="input">
        <User className="w-5 h-5 opacity-50" />
        <input
          placeholder="Full Name"
          type="text"
          required
        />
      </label>

      <label className="input">
        <Mail className="w-5 h-5 opacity-50" />
        <input
          placeholder="Email"
          type="email"
        />
      </label>

      <label className="input">
        <Phone className="w-5 h-5 opacity-50" />
        <input
          className="tabular-nums"
          maxLength={10}
          minLength={10}
          pattern="[0-9]*"
          placeholder="Phone"
          title="Must be 10 digits"
          type="tel"
          required
        />
      </label>
      <p className="validator-hint">Must be 10 digits</p>
      <textarea
        className="textarea"
        placeholder="Additional information"
      ></textarea>

      <button className="btn btn-neutral rounded-xl mt-4">Send Application</button>
    </fieldset>
  )
}

export default Form
