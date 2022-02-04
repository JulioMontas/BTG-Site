import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import GlobalHero from "../../../components/globalHero"
import IntroText from "../../../components/introText"

const ConsultationPage = () => (
  <Layout>
    <Seo title="Consultation" />
    <GlobalHero
      title= "Consultation"
      summary= "Summary text"
    />
    <IntroText />
  </Layout>
)

export default ConsultationPage
