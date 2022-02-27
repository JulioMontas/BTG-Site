import * as React from "react"
import { Link } from "gatsby"
import * as practiceAreasBtnStyles from "./practiceAreasBtn.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

const PracticeAreasBtn = (props) => {
  return (
    <Link to={'/practice-area/' + props.url} className={practiceAreasBtnStyles.cta}>
      <div className={practiceAreasBtnStyles.wrapper}>
        <GatsbyImage image={props.image} />
        <h3 className={practiceAreasBtnStyles.title}>{props.title}</h3>
      </div>
    </Link>
  )
}

export default PracticeAreasBtn
