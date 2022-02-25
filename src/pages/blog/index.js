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
      summary= "Etiam hendrerit ipsum at enim fermentum."
    />
    <GlobalContact />
  </Layout>
)

export default BlogPage
