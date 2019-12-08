import React from "react"
import "./Form.scss"

const Form = () => {
  return (
    <form
      className="email-form"
      method="post"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="true"
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
      <input type="submit" name="submit" id="submit" value="SEND" />
    </form>
  )
}

export default Form
