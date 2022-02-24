import * as React from "react"
import { Link } from "gatsby"
import * as caseResultBtnStyles from "./caseResultBtn.module.css"

const CaseResultBtn = (props) => {
  return (
    <Link
      to={'/case-result/' + props.url}
      className={caseResultBtnStyles.cta}
    >
      <p className={caseResultBtnStyles.description}>
        {props.description}
      </p>
      <h3 className={caseResultBtnStyles.title}>
        {props.title}
      </h3>
    </Link>
  )
}

export default CaseResultBtn
