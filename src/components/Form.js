import React, { useState } from "react"
import "./Form.scss"
import Popup from "./Popup"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = () => {
  const [contact, setState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [popupState, setPopup] = useState("walo")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contact }),
    })
      .then(() => {
        setPopup("sucess")
      })
      .catch(() => {
        setPopup("error")
      })

    e.preventDefault()
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="email-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="inputs">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="form-input"
          required
          value={contact.name}
          onChange={e => {
            const val = e.target.value
            setState(prevState => {
              return { ...prevState, name: val }
            })
          }}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="form-input"
          required
          value={contact.email}
          onChange={e => {
            const val = e.target.value
            setState(prevState => {
              return { ...prevState, email: val }
            })
          }}
        />
        <textarea
          type="text"
          name="message"
          id="message"
          className="form-input"
          placeholder="Message"
          value={contact.message}
          required
          onChange={e => {
            const val = e.target.value
            setState(prevState => {
              return { ...prevState, message: val }
            })
          }}
        />
      </div>
      <button type="submit" id="submit">
        SEND
      </button>
      <Popup type={popupState} setPopup={setPopup} />
    </form>
  )
}

export default Form
