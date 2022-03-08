import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import ButtonCta from "../../components/buttonCta"
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

const TermsAndConditions = () => (
  <Layout>
    <Seo title="Post" />
    <GlobalHero
      title="Terms & Conditions"
      summary="Text"
    />
    <div className="container">
      <div className="twoColumnsGrid">
        <h2>Disclaimer</h2>
        <ButtonCta
          url="/terms-and-conditions/disclaimer"
          title={"Disclaimer"}
        />
      </div>
      <div className="twoColumnsGrid">
        <h2>Privacy Policy</h2>
        <ButtonCta
          url="/terms-and-conditions/privacy-policy"
          title={"Privacy Policy"}
        />
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default TermsAndConditions
