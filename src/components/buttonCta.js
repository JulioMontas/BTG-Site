import * as React from "react"
import { Link } from "gatsby"

import "./buttonCta.css"

const ButtonCta = (props) => {
  return (
    <div className="buttonCta">
      <Link to={props.url}>
        <span>
          {props.title}
        </span>
      </Link>
    </div>
  )
}

export default ButtonCta
