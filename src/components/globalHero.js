import * as React from "react"

const GlobalHero = (props) => (
  <div
    style={{
      padding:`2rem 1rem 2rem`,
      background: `#1d3851`,
      marginTop: `105px`,
    }}
  >
    <div className="container">
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
    </div>
  </div>
)

export default GlobalHero
