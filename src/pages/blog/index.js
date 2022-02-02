import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <div className="globalHero">
      <div className="container">
        <h2 className="heroTitle">Blog</h2>
      </div>
    </div>
  </Layout>
)

export default BlogPage
