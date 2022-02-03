import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import * as caseResultsArticleStyles from "../../../styles/caseResultsArticle.module.css"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
    test: `green`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const CaseResultsArticle = () => (
  <Layout>
    <Seo title="Case Results Article" />
    <div className="globalHero">
      <div className="container">
        <h2 className="heroTitle">Tampa Boating Diving Accidents</h2>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
        <p>Experienced Help For Those Injured On The Water With the port we have here in Tampa and the many opportunities for people to enjoy the water for recreational purposes, the possibility of serious injury on the water is very real. Depending on where the injury takes place and the circumstances of the accident, very different sets of laws may apply.</p>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.primary, color: theme.colorsText.secondary}}>
      <div className="container">
        <h2>We assist people with all manner of maritime accidents including those involving:</h2>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
        <p>Text text text text</p>
      </div>
    </div>

    <div className={caseResultsArticleStyles.intro} style={{background: theme.colorsBG.primary, color: theme.colorsText.secondary}}>
      <div className="container">
        <h2>Photo</h2>
      </div>
    </div>


  </Layout>
)

export default CaseResultsArticle
