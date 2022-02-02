import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseResultList from "../../components/caseResultList"

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

const CaseResultsPage = () => (
  <Layout>
    <Seo title="Case Results" />
    <div className="hero">
      <div className="container">
        <h1>Case Results</h1>
        <p>Welcome to the Case Results new gatsby site.</p>
      </div>
    </div>
    <div
      style={{
        background: theme.colorsBG.primary,
        paddingBottom: `5em`
      }}
    >
      <div className="container">
        <CaseResultList />
      </div>
    </div>
  </Layout>
)

export default CaseResultsPage
