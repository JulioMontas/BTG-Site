import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PraticeAreasList from "../../components/praticeAreasList"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"

const PraticeAreasPage = () => (
  <Layout>
    <Seo title="Pratice Areas" />
    <GlobalHero
      title= "Pratice Areas"
      summary= "Ipsum at enim fermentum, et molestie dui semper. Quis auctor augue rhoncus in."
    />
    <div className="container">
      <PraticeAreasList />
    </div>
    <GlobalContact />
  </Layout>
)

export default PraticeAreasPage
