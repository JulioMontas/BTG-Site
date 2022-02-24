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
      <h3>
        {props.title}
      </h3>
      <p>
        {props.location}
      </p>
    </Link>
  )
}

export default AttorneyBtn
