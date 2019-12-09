import React from "react"
import "./Video.scss"

const Video = props => {
  return (() => {
    if (props.video !== "") {
      return (
        <div className="video-container">
            <iframe width="1200" height="730" src={props.video} frameBorder="0" title={props.video}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <button
                className="video-close"
                onClick={() => props.setVideo("")}
              >
                &times;
              </button>
        </div>
      )
    } else {
      return ""
    }
  })()
}
export default Video
