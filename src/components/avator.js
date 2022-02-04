import React from "react"
import * as avatorStyles from "./avator.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Avator = (props) => {
  const width = 125
  return (
    <div className={avatorStyles.avator}>
    <StaticImage
      src="../images/attorney-team-stephen.jpg"
      alt="A dinosaur"
      placeholder="blurred"
      layout="constrained"
      width={width}
      height={width}
      className={avatorStyles.photo}
     />
    </div>
  )
}

export default Avator;
