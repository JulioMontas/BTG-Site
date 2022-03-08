import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as caseResultBtnStyles from "./caseResultBtn.module.css"

const CaseResultBtn = (props) => {
  return (
    <AniLink paintDrip to={'/testimonial-and-case-study/' + props.url} hex="#3d586b" className={caseResultBtnStyles.cta}>
      <h3 className={caseResultBtnStyles.title}>${props.title}</h3>
      <p className={caseResultBtnStyles.description}>{props.description}</p>
    </AniLink>
  )
}

export default CaseResultBtn
