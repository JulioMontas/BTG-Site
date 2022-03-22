import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap : 20px;
  background: rgba(188, 163, 96, 0.4);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.32);
  border: 1px solid #BCA360;
  border-radius: 8px;
  padding: 2.5em 1em;
  transition: 0.3s;
  img{
    border: 2px solid #BCA360;
    border-radius: 100%;
  }
  :hover{
    background: var(--primary-cta-color-hover);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.32);
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
`
const Title = styled.h2`
  font-size: 1.2em;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`
const Location = styled.p`
  font-size: 0.9em;
  margin-top: 0.4em;
  display: none;
  @media (min-width: 768px) {
    flex-direction: column;
    display: block;
  }
`

const AttorneyBtn = (props) => {
  return (
    <AniLink paintDrip to={'/about-us/attorney/' + props.slug} hex="#3d586b">
      <Card>
        <GatsbyImage image={props.image} />
        <Location>{props.location}</Location>
        <Title>{props.title}</Title>
      </Card>
    </AniLink>
  )
}

export default AttorneyBtn
