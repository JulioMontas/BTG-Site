import * as React from "react"
import { Link } from "gatsby"

import * as caseResultBtnStyles from "./caseResultBtn.module.css"

const CaseResultBtn = (props) => {
  return (
    <div className={caseResultBtnStyles.caseResultBtn}>
      <Link to={props.url}>
        <h3>{props.description}</h3>
        <p>{props.title}</p>
      </Link>
    </div>
  )
}

export default CaseResultBtn
