import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Card = styled.span`
  filter: grayscale(var(--value, 40%));
  transition: 0.3s;
  :hover{
    filter: grayscale(var(--value, 0%));
  }
  @media (min-width: 992px) {

  }
`

const GoogleMap = ({data}) => {
  return(
    <Card>
      <StaticImage
        src="../../src/images/google-map.png"
      />
    </Card>
  )
}

export default GoogleMap
