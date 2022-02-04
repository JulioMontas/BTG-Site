import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import AttorneyList from "../../components/attorneyList"
import GlobalContact from "../../components/globalContact"
// import * as attorneysStyles from "../../styles/attorneysPage.module.css"

const AttorneysPage = () => (
  <Layout>
    <Seo title="Attorneys" />
    <GlobalHero
      title= "Attorneys"
      summary= "Summary text"
    />
    <div className="attorneys">
      <div className="container">
        <AttorneyList />
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default AttorneysPage
