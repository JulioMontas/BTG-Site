import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <GlobalHero
      title= "404: Not Found"
      summary= "You just hit a route that doesn&#39;t exist... the sadness."
    />
    <GlobalContact />
  </Layout>
)

export default NotFoundPage
