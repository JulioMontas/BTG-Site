import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import IntroText from "../../components/introText"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <GlobalHero
      title= "Blog"
      summary= "Summary text"
    />
    <IntroText />
    <GlobalContact />
  </Layout>
)

export default BlogPage
