import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AttorneyList from "../../components/attorneyList"
import * as attorneysStyles from "../../styles/attorneysPage.module.css"

const AttorneysPage = () => (
  <Layout>
    <Seo title="Attorneys" />
    <div className="hero">
      <div className="container">
        <h2>Attorneys</h2>
      </div>
    </div>

    <div className="attorneys">
      <div className="container">
        <AttorneyList />
      </div>
    </div>
  </Layout>
)

export default AttorneysPage
