import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const AboutPage = () => (
  <Layout>
    <Seo title="The Firm" />
    <div className="hero">
      <Container>
        <h1>The Firm</h1>
        <p>Welcome to the About new gatsby site.</p>
      </Container>
    </div>
  </Layout>
)

export default AboutPage
