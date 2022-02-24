import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <Seo title="Post" />
    <div className="container">
      <h2>Post</h2>
      <p>This page is not created until requested by a user.</p>
    </div>
  </Layout>
)

export default UsingDSG
