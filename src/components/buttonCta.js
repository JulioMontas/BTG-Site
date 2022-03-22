import * as React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const ButtonLink = styled.span`
  display: block;
  width: 225px;
  border-radius: 5px;
  text-align: center;
  padding: 0.8em 0;
  letter-spacing: 1px;
  transition: 0.3s;
  background: var(--primary-cta-color);
  :hover{
    background: var(--primary-cta-color-hover);
  }
`

const ButtonCta = (props) => {
  return (
    <AniLink paintDrip to={props.url} hex="#3d586b">
      <ButtonLink>
        {props.title}
      </ButtonLink>
    </AniLink>
  )
}

export default ButtonCta
