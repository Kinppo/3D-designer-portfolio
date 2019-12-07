import React from "react"
import SEO from "../components/seo"
import Img from "../components/image"
import Footer from "../components/Footer"
import Form from "../components/Form"
import "./index.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="bg"></div>
    <div className="content">
      <main>
        <h1>MOHAMMED AMAOU</h1>
        <h2>3D Designer</h2>
        <Img />
      </main>
      <Footer />
      <Form />
    </div>
  </div>
)

export default IndexPage
