import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalContact from "../../components/globalContact"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <div className="globalHero">
      <div className="container">
        <h2 className="heroTitle">Blog</h2>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default BlogPage
