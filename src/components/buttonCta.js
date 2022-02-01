import * as React from "react"
import { Link } from "gatsby"

import "./buttonCta.css"

const ButtonCta = (props) => {
  return (
    <div>
      <Link to={props.url} className="button-cta">
        <span>
          {props.title}
        </span>
      </Link>
    </div>
  )
}

export default ButtonCta
