import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
    </Container>
  </Layout>
)

export default IndexPage
