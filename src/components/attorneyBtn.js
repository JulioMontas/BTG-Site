import * as React from "react"
import { Link } from "gatsby"
import Avator from "./avator"
import * as attorneyBtnStyles from "./attorneyBtn.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

const AttorneyBtn = (props) => {
  return (
    <Link to={'/attorney/' + props.url} className={attorneyBtnStyles.cta}>
      <div>
        <GatsbyImage image={props.image} className={attorneyBtnStyles.coverImage} />
        <p className={attorneyBtnStyles.description}>{props.location}</p>
        <h3 className={attorneyBtnStyles.title}>{props.title}</h3>
      </div>
    </Link>
  )
}

export default AttorneyBtn
