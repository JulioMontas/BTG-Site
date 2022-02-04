import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import IntroText from "../components/introText"

const TestimonialPage = () => (
  <Layout>
    <Seo title="Testimonial" />
    <GlobalHero
      title= "Testimonial"
      summary= "Summary text"
    />
    <IntroText />
    <GlobalContact />
  </Layout>
)

export default TestimonialPage
