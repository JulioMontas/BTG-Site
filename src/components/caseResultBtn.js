import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const Card = styled.span`
  display: block;
  background: rgba(188, 163, 96, 0.4);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.32);
  border: 1px solid #BCA360;
  border-radius: 8px;
  text-align: center;
  padding: 1em 0.285em 1.3em;
  transition: 0.3s;
  margin-bottom: 1em;
  :hover{
    background: var(--primary-cta-color-hover);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.32);
  }
`
const Title = styled.h2`
  font-size: 1.8em;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-transform: uppercase;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`
const Description = styled.p`
  font-size: 1em;
  letter-spacing: 0.06em;
`

const CaseResultBtn = (props) => {
  return (
    <AniLink paintDrip to={'/testimonial-and-case-study/' + props.url} hex="#3d586b">
      <Card>
        <Title>${props.title}</Title>
        <Description>{props.description}</Description>
      </Card>
    </AniLink>
  )
}

export default CaseResultBtn
