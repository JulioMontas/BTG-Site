import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { StructuredText } from "react-datocms"
import * as caseResultsArticleStyles from "../../styles/caseResultsArticle.module.css"
import { graphql } from "gatsby"

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

export const query = graphql`
{
  datoCmsDisclaimer {
    title
    summary
    content {
      value
    }
  }
}
`

const Disclaimer = ({ data }) => (
  <Layout>
    <Seo title="Post" />
    <GlobalHero
      title={data.datoCmsDisclaimer.title}
      summary={data.datoCmsDisclaimer.summary}
    />
    <div style={{
      background: theme.colorsBG.secondary,
      color: theme.colorsText.primary,
    }}>
      <div className="container">
        <article className={caseResultsArticleStyles.intro}>
          <StructuredText data={data.datoCmsDisclaimer.content} />
        </article>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default Disclaimer
