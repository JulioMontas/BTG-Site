import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseResultList from "../../components/caseResultList"
import GlobalHero from "../../components/globalHero"
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
    <GlobalHero
      title= "Case Results"
      summary= "Summary text"
    />
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
