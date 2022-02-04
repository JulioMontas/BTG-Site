import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"

const TestimonialPage = () => (
  <Layout>
    <Seo title="Testimonial" />
    <GlobalHero
      title= "Testimonial"
      summary= "Summary text"
    />
    <GlobalContact />
  </Layout>
)

export default TestimonialPage
