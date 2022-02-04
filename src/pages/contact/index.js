import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import IntroText from "../../components/introText"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <GlobalHero
      title= "Contact Us"
      summary= "Summary text"
    />
    <IntroText />
  </Layout>
)

export default ContactPage
