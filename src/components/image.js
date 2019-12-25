import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Video from "./Video.js"
import "./Image.scss"

const Image = () => {
  const [imgInfo] = useState([
    "Video Editing",
    "3D Modeling",
    "Video Editing",
    "3D Modeling",
    "Video Editing",
    "3D Modeling",
    "Video Editing",
    "3D Modeling",
    "Video Editing",
  ])
  const [links] = useState([
    "https://www.youtube.com/embed/GBQ3OwxoOzo",
    "https://www.youtube.com/embed/vbXV5joa1gc",
    "https://www.youtube.com/embed/tzU3rII8tyg",
    "https://www.youtube.com/embed/b9YDScOsRQo",
    "https://www.youtube.com/embed/vJ4dfKTEKsA",
    "https://www.youtube.com/embed/UxvAnTbiw6E",
    "https://www.youtube.com/embed/7KrNGNvqoZc",
    "https://www.youtube.com/embed/7KrNGNvqoZc",
    "https://www.youtube.com/embed/7KrNGNvqoZc",
  ])
  const [videoState, setVideo] = useState("")
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
        <div
          className="img-container"
          key={image.id}
          role="button"
          tabIndex={image.id}
          onClick={() =>
            setVideo(
              links[
                image.childImageSharp.fixed.src
                  .split(/.jpe?g/)
                  .join("")
                  .slice(-1)
              ]
            )
          }
          onKeyUp={() => ""}
        >
          <Img
            fixed={image.childImageSharp.fixed}
            className="work-img"
            alt="work screenshot"
          />
          <span className="img-info">
            {
              imgInfo[
                image.childImageSharp.fixed.src
                  .split(/.jpe?g/)
                  .join("")
                  .slice(-1)
              ]
            }
          </span>
        </div>
      ))}
      <Video video={videoState} setVideo={setVideo} />
    </div>
  )
}

export default Image
