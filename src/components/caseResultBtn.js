import * as React from "react"
import { Link } from "gatsby"

import "./caseResultBtn.css"

const CaseResultBtn = (props) => {
  return (
    <div className="caseResultBtn">
      <Link to={props.url}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Link>
    </div>
  )
}

export default CaseResultBtn
