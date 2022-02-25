import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import GlobalHero from "../../../components/globalHero"
import GlobalContact from "../../../components/globalContact"

const ConsultationPage = () => (
  <Layout>
    <Seo title="Consultation" />
    <GlobalHero
      title= "Consultation"
      summary= "Summary text"
    />
    <GlobalContact />
  </Layout>
)

export default ConsultationPage
