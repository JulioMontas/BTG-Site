import * as React from "react"
import * as globalHeroStyles from "./globalHero.module.css"

const GlobalHero = (props) => (
  <div className={globalHeroStyles.globalHero}>
    <div className="container">
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
    </div>
  </div>
)

export default GlobalHero
