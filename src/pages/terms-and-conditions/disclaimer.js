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

const Disclaimer = ({ data }) => (
  <Layout>
    <Seo title="Post" />
    <GlobalHero
      title="Disclaimer"
      summary="Text"
    />
    <div className="container">
      Disclaimer
    </div>
    <GlobalContact />
  </Layout>
)

export default Disclaimer
