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
    <Seo title="Terms & Conditions" />
    <GlobalHero
      title="Terms & Conditions"
      summary="Text"
    />
    <div style={{padding:`5rem 1rem 5rem`, background:`#FFF`, color:`#333`}}>
      <div className="container">
        <div className="twoColumnsGrid">
          <h2>Disclaimer</h2>
          <ButtonCta
            url="/terms-and-conditions/disclaimer"
            title={"Disclaimer"}
          />
        </div>
      </div>
    </div>

    <div style={{padding:`5rem 1rem 5rem`}}>
      <div className="container">
        <div className="twoColumnsGrid">
          <h2>Privacy Policy</h2>
          <ButtonCta
            url="/terms-and-conditions/privacy-policy"
            title={"Privacy Policy"}
          />
        </div>
      </div>
    </div>

    <GlobalContact />
  </Layout>
)

export default TermsAndConditions
