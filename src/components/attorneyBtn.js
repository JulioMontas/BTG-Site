import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as attorneyBtnStyles from "./attorneyBtn.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

const AttorneyBtn = (props) => {
  return (
    <AniLink paintDrip to={'/attorney/' + props.slug} hex="#3d586b" className={attorneyBtnStyles.cta}>
      <div>
        <GatsbyImage image={props.image} className={attorneyBtnStyles.coverImage} />
        <p className={attorneyBtnStyles.description}>{props.location}</p>
        <h3 className={attorneyBtnStyles.title}>{props.title}</h3>
      </div>
    </AniLink>
  )
}

export default AttorneyBtn
