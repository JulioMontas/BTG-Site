import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalContact from "../components/globalContact"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container">
      <h2 className="heroTitle">404: Not Found</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    <GlobalContact />
  </Layout>
)

export default NotFoundPage
