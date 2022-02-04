import * as React from "react"
import ButtonCta from "./buttonCta"
import * as globalHeroStyles from "./globalHero.module.css"

const GlobalHero = (props) => (
  <div className="globalHero">
    <div className="container">
      <h2 className="globalHero__text--title">{props.title}</h2>
      <p className="globalHero__text---summary">{props.summary}</p>
    </div>
  </div>
)

export default GlobalHero
