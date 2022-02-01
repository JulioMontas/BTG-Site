import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../components/container"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className="hero">
      <Container>
        <h1>Contact</h1>
        <p>Welcome to the Contact new gatsby site.</p>
      </Container>
    </div>
  </Layout>
)

export default ContactPage
