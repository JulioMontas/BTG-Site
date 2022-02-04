import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseResultList from "../../components/caseResultList"
import GlobalContact from "../../components/globalContact"

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

const CaseResultsPage = () => (
  <Layout>
    <Seo title="Case Results" />

    <div className="globalHero">
      <div className="container">
        <h2 className="heroTitle">Case Results</h2>
      </div>
    </div>
    <div
      style={{
        background: theme.colorsBG.primary,
        padding:`3em 0 7em`
      }}
    >
      <div className="container">
        <CaseResultList />
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default CaseResultsPage
