import * as React from "react"
import * as Styles from "./introText.module.css"

const IntroText = (props) => {
  return (
    <div className={Styles.pIntro}>
      <div className="container">
        <div className={Styles.wrapper}>
          <h2 className={Styles.title}>{props.title}</h2>
          <p className={Styles.summary}>{props.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default IntroText
