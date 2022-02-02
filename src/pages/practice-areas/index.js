import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PraticeAreasList from "../../components/praticeAreasList"

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

const PraticeAreasPage = () => (
  <Layout>
    <Seo title="Pratice Areas" />
    <div className="hero">
      <div className="container">
        <h1>Pratice Areas</h1>
        <p>Welcome to the Pratice Areas new gatsby site.</p>
      </div>
    </div>
    <div
      style={{
        background: theme.colorsBG.primary,
        paddingBottom: `5em`
      }}
    >
      <div className="container">
        <PraticeAreasList />
      </div>
    </div>
  </Layout>
)

export default PraticeAreasPage
