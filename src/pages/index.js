import React from "react"
import SEO from "../components/seo"
import Img from "../components/Image"
import Footer from "../components/Footer"
import "./index.scss"

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
    </div>
  </div>
)

export default IndexPage
