import * as React from "react"
import { Link } from "gatsby"
import * as buttonCtaStyles from "./buttonCta.module.css"

const ButtonCta = (props) => {
  return (
    <div>
      <Link
        to={props.url}
        className={buttonCtaStyles.buttonCTA}
      >
        <span>
          {props.title}
        </span>
      </Link>
    </div>
  )
}

export default ButtonCta
