import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import { StructuredText } from "react-datocms"
import GlobalContact from "../components/globalContact"
import * as caseResultsArticleStyles from "../styles/caseResultsArticle.module.css"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const CaseResult = ({ pageContext: { node } }) => {
  return(
    <Layout>
      <Seo title="CaseResult" />
      <GlobalHero
        title={node.title}
        summary={node.subtitle}
      />
      <div style={{
        background: theme.colorsBG.secondary,
        color: theme.colorsText.primary,
      }}>
        <div className="container">
          <div className={caseResultsArticleStyles.intro}>
            <StructuredText data={node.content} />
          </div>
        </div>
      </div>
      <GlobalContact />
    </Layout>
  )
}

export default CaseResult
