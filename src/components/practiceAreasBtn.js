import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as practiceAreasBtnStyles from "./practiceAreasBtn.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

const PracticeAreasBtn = (props) => {
  return (
    <AniLink paintDrip to={props.url} hex="#3d586b" className={practiceAreasBtnStyles.cta}>
      <div className={practiceAreasBtnStyles.wrapper}>
        <GatsbyImage image={props.image} />
        <h3 className={practiceAreasBtnStyles.title}>{props.title}</h3>
      </div>
    </AniLink>
  )
}

export default PracticeAreasBtn
