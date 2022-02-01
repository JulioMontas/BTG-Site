import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const TestimonialPage = () => (
  <Layout>
    <Seo title="Testimonial" />
    <div className="hero">
      <Container>
        <h1>Testimonial</h1>
        <p>Welcome to the testimonial new gatsby site.</p>
      </Container>
    </div>  
  </Layout>
)

export default TestimonialPage