import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import IntroText from "../components/introText"

const FAQPage = () => (
  <Layout>
    <Seo title="FAQs" />
    <GlobalHero
      title= "FAQs"
      summary= "Summary text"
    />
    <IntroText />
    <GlobalContact />
  </Layout>
)

export default FAQPage
