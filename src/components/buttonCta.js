import * as React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as buttonCtaStyles from "./buttonCta.module.css"

const ButtonCta = (props) => {
  return (
    <div>
      <AniLink paintDrip to={props.url} hex="#3d586b" className={buttonCtaStyles.buttonCTA}>
        <span>
          {props.title}
        </span>
      </AniLink>
    </div>
  )
}

export default ButtonCta
