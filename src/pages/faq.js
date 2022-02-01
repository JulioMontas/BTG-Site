import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const FAQPage = () => (
  <Layout>
    <Seo title="FAQs" />
    <div className="hero">
      <Container>
        <h1>FAQs</h1>
        <p>Welcome to the FAQs new gatsby site.</p>
      </Container>
    </div>  
  </Layout>
)

export default FAQPage
