import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../components/container"

const AttorneysPage = () => (
  <Layout>
    <Seo title="Attorneys" />
    <div className="hero">
      <Container>
        <h1>Attorneys</h1>
        <p>Welcome to the Attorneys new gatsby site.</p>
      </Container>
    </div>
  </Layout>
)

export default AttorneysPage