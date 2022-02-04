import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <GlobalHero
      title= "Blog"
      summary= "Summary text"
    />
    <div className="container">
      <h3>Lorem ipsum dolor sit amet.</h3>
    </div>
    <GlobalContact />
  </Layout>
)

export default BlogPage
