import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../components/container"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <div className="hero">
      <Container>
        <h1>Blog</h1>
        <p>Welcome to the Blog new gatsby site.</p>
      </Container>
    </div>
  </Layout>
)

export default BlogPage
