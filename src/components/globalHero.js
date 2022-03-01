import * as React from "react"
import * as globalHeroStyles from "./globalHero.module.css"

const GlobalHero = (props) => (
  <div
    style={{
      padding:`2rem 1rem 1rem`,
      background: `#1d3851`,
      marginTop: `105px`,
    }}
  >
    <div className="container">
    <div className={globalHeroStyles.wave__tilt}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>

      <div>
        <h2 className={globalHeroStyles.title}>{props.title}</h2>
        <p>{props.summary}</p>
      </div>
    </div>


  </div>
)

export default GlobalHero
