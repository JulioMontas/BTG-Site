import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { StructuredText } from "react-datocms"
import * as caseResultsArticleStyles from "../../styles/caseResultsArticle.module.css"

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

const PrivacyPolicy = ({ data }) => (
  <Layout>
    <Seo title="Post" />
    <GlobalHero
      title="Privacy Policy"
      summary="Text"
    />
    <div className="container">
      Privacy Policy
    </div>
    <GlobalContact />
  </Layout>
)

export default PrivacyPolicy
