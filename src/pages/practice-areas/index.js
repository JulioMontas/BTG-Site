import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PraticeAreasList from "../../components/praticeAreasList"
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

const PraticeAreasPage = () => (
  <Layout>
    <Seo title="Pratice Areas" />
    <GlobalHero
      title= "Pratice Areas"
      summary= "Summary text"
    />
    <div
      style={{
        background: theme.colorsBG.primary,
        padding:`3em 0 7em`
      }}
    >
      <div className="container">
        <PraticeAreasList />
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default PraticeAreasPage
