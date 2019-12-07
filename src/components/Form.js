import React from "react"

const Form = () => {
  return (
    <form className="email-form">
      <input type="text" name="email" id="email" className="form-input" />
      <label for="email" className="form-label" id="email-label">
        Email:
      </label>
      <textarea
        type="text"
        name="message"
        id="message"
        className="form-input"
      />
      <label for="message" className="form-label" id="message-label">
        Message:
      </label>
      <input type="submit" name="submit" id="submit" value="SEND" />
    </form>
  )
}

export default Form
