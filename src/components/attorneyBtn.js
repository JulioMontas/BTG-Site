import * as React from "react"
import { Link } from "gatsby"
import Avator from "./avator"
import * as attorneyBtnStyles from "./attorneyBtn.module.css"

const AttorneyBtn = (props) => {
  return (
    <Link
      to={'/attorneys/' + props.url}
      className={attorneyBtnStyles.cta}
    >
      <Avator />
      <h3 className={attorneyBtnStyles.title}>
        {props.title}
      </h3>
      <p className={attorneyBtnStyles.location}>
        {props.location}
      </p>
    </Link>
  )
}

export default AttorneyBtn
