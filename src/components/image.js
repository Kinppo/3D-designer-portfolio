import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const [imgInfo] = useState({
    info: [
      "Video Editing",
      "3D Modeling",
      "Video Editing",
      "3D Modeling",
      "Video Editing",
      "3D Modeling",
      "Video Editing",
      "3D Modeling",
      "Video Editing",
    ],
  })
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "work" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div className="grid">
      {data.allFile.nodes.map(image => (
        <div className="img-container">
          <Img
            key={image.id}
            fluid={image.childImageSharp.fluid}
            className="work-img"
          />
          <span className="img-info">
            {
              imgInfo.info[
                image.childImageSharp.fluid.src
                  .split(/.jpe?g/)
                  .join("")
                  .slice(-1)
              ]
            }
          </span>
        </div>
      ))}
    </div>
  )
}

export default Image
