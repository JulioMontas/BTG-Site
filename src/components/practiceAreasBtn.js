import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from "styled-components"

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "photo"
    "title";
  background: var(--primary-cta-color);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.32);
  text-align: center;
  border-radius: 10px;
  transform: scale(0.95);
  transition: 0.3s;
  :hover{
    transform: scale(1);
    background: var(--primary-cta-color-hover);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.32);
  }
  img{
    grid-area: photo;
    border-radius: 10px 10px 0 0;
  }
`
const Title = styled.h2`
  margin: 0.6em 0;
  grid-area: title;
  font-size: 1.2em;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-shadow: 0px 3px 4px rgb(0 0 0 / 25%);
`

const PracticeAreasBtn = (props) => {
  return (
    <AniLink paintDrip to={props.url} hex="#3d586b">
      <Card>
        <GatsbyImage image={props.image} />
        <Title>{props.title}</Title>
      </Card>
    </AniLink>
  )
}

export default PracticeAreasBtn
