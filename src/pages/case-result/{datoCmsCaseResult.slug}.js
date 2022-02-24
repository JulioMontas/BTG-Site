import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"

const CaseResultPost = (pageContext) => {
  return (
    <Layout>
      <Seo title="Case Result" />
      <GlobalHero
        title= "Title"
        summary= "Summary"
      />
      <div className="container">
        <h2>{pageContext.id}</h2>
        <p>This page is not created until requested by a user.</p>
      </div>
    </Layout>
  )
}

export default CaseResultPost
