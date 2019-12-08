import React from "react"
import "./Form.scss"

const Form = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="email-form"
    >
      <div className="inputs">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="form-input"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="form-input"
        />
        <textarea
          type="text"
          name="message"
          id="message"
          className="form-input"
          placeholder="Message"
        />
      </div>
      <button type="submit" id="submit">
        SEND
      </button>
    </form>
  )
}

export default Form
