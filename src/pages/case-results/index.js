import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../components/container"
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
      <Container>
        <h1>Case Results</h1>
        <p>Welcome to the Case Results new gatsby site.</p>
      </Container>
    </div>
    <div
      style={{
        background: theme.colorsBG.primary,
        paddingBottom: `5em`
      }}
    >
      <Container>
        <CaseResultList />
      </Container>
    </div>
  </Layout>
)

export default CaseResultsPage
