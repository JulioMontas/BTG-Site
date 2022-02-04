import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <GlobalHero
      title= "Contact Us"
      summary= "Summary text"
    />
    <div className="container">
      <h3>Lorem ipsum dolor sit amet.</h3>
    </div>
  </Layout>
)

export default ContactPage
