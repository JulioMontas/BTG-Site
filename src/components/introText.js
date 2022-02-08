import * as React from "react"
import * as Styles from "./introText.module.css"

const theme = {
  colorsBG: {
    primary: `#FFF`,
  },
  colorsText: {
    primary: `#333`,
  },
}

const IntroText = (props) => {
  return (
    <div className={Styles.pIntro} style={{background: theme.colorsBG.primary, color: theme.colorsText.primary}}>
      <div className="container">
        <div className={Styles.wrapper}>
          <h2 className={Styles.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio magna, vestibulum ut consectetur.</h2>
          <p className={Styles.description}>Ut efficitur consectetur lectus, quis auctor augue rhoncus in. Duis tristique accumsan ante vel blandit. Aliquam ultricies mollis risus id fermentum. Etiam hendrerit ipsum at enim fermentum, et molestie dui semper. Sed non erat risus. Pellentesque eu nibh suscipit, auctor quam ac, placerat ligula. Donec sed tincidunt purus. Donec quis ultrices erat. Aliquam ultricies mollis risus id fermentum. Etiam hendrerit ipsum at enim fermentum, et molestie dui semper. Sed non erat risus.</p>
        </div>
      </div>
    </div>
  )
}

export default IntroText
