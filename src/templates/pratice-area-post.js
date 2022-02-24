import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"

const AttorneyAreaPost = ({ pageContext: { node } }) => (
  <Layout>
    <Seo title="Attorney Area Post" />
    <GlobalHero
      title={node.title}
      summary={node.id}
    />
  </Layout>
)

export default AttorneyAreaPost
