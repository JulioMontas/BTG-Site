import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"

const AttorneyProfile = ({ pageContext: { node } }) => (
  <Layout>
    <Seo title="Attorney Profile" />
    <GlobalHero
      title={node.name}
      summary={node.location}
    />
  </Layout>
)

export default AttorneyProfile
