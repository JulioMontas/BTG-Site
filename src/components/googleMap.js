import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const GoogleMap = ({data}) => {
  return(
    <div style={{filter:`grayscale(var(--value, 65%))`}}>
      <StaticImage
        src="../../src/images/google-map.png"
      />
    </div>
  )
}

export default GoogleMap
