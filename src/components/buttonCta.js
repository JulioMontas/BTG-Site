import * as React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const ButtonLink = styled.span`
  width: 100%;
  background: var(--primary-cta-color);
  border-radius: 5px;
  text-align: center;
  padding: 0.8em 0;
  letter-spacing: 1px;
  display: block;
  transition: 0.3s;
  :hover{
    background: var(--primary-cta-color-hover);
  }
  @media (min-width: 992px) {
    width: 225px;
  }
`

const ButtonCta = (props) => {
  return (
    <div>
      <AniLink paintDrip to={props.url} hex="#3d586b">
        <ButtonLink>
          {props.title}
        </ButtonLink>
      </AniLink>
    </div>
  )
}

export default ButtonCta
