import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <div className="hero">
      <div className="container">
        <h1>Blog</h1>
        <p>Welcome to the Blog new gatsby site.</p>
      </div>
    </div>
  </Layout>
)

export default BlogPage
