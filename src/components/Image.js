import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Image.scss"

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
            fixed(quality: 100, width: 360, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div className="grid">
      {data.allFile.nodes.map(image => (
        <div className="img-container" key={image.id}>
          <Img
            fixed={image.childImageSharp.fixed}
            className="work-img"
            alt="work screenshot"
          />
          <span className="img-info">
            {
              imgInfo.info[
                image.childImageSharp.fixed.src
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
