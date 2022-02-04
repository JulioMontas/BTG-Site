import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PraticeAreasList from "../../components/praticeAreasList"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import IntroText from "../../components/introText"

const PraticeAreasPage = () => (
  <Layout>
    <Seo title="Pratice Areas" />
    <GlobalHero
      title= "Pratice Areas"
      summary= "Summary text"
    />
    <IntroText />
    <div
      style={{
        padding:`7em 0 7em`
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
