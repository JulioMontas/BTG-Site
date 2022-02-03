import * as React from "react"
import { Link } from "gatsby"
import * as caseResultBtnStyles from "./caseResultBtn.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const CaseResultBtn = (props) => {
  return (
      <Link to={props.url} className={caseResultBtnStyles.cta}>
        <div className={caseResultBtnStyles.wrapper}>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
          <p className={caseResultBtnStyles.description}>{props.description}</p>
          <h3 className={caseResultBtnStyles.title}>{props.title}</h3>
        </div>
      </Link>
  )
}

export default CaseResultBtn
