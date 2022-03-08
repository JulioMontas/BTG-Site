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
  datoCmsPrivacyPolicy {
    title
    summary
    content {
      value
    }
  }
}
`

const PrivacyPolicy = ({ data }) => (
  <Layout>
    <Seo title="Post" />
    <GlobalHero
      title={data.datoCmsPrivacyPolicy.title}
      summary={data.datoCmsPrivacyPolicy.summary}
    />
    <div className="container">
      <StructuredText data={data.datoCmsPrivacyPolicy.content} />
    </div>
    <GlobalContact />
  </Layout>
)

export default PrivacyPolicy
