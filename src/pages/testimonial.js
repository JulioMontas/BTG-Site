import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalContact from "../components/globalContact"

const TestimonialPage = () => (
  <Layout>
    <Seo title="Testimonial" />
    <div className="globalHero">
      <div className="container">
        <h2 className="heroTitle">Testimonial</h2>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default TestimonialPage
