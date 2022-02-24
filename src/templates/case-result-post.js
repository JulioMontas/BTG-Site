import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"

const CaseResult = ({ pageContext: { node } }) => (
  <Layout>
    <Seo title="CaseResult" />
    <GlobalHero
      title={node.title}
      summary={node.subtitle}
    />
  </Layout>
)

export default CaseResult
