import * as React from "react"
import { Link } from "gatsby"
import * as practiceAreasBtnStyles from "./practiceAreasBtn.module.css"
import { StaticImage } from "gatsby-plugin-image"

const CaseResultBtn = (props) => {
  return (
    <Link
      to={props.url}
      className={practiceAreasBtnStyles.cta}
    >
      <div className={practiceAreasBtnStyles.wrapper}>
        <StaticImage
          src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt="A dinosaur"
          className={practiceAreasBtnStyles.photo}
        />
        <h3 className={practiceAreasBtnStyles.title}>{props.title}</h3>
      </div>
    </Link>
  )
}

export default CaseResultBtn
