import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseResultList from "../../components/caseResultList"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"

const CaseResultsPage = () => (
  <Layout>
    <Seo title="Case Results" />
    <GlobalHero
      title= "Case Results"
      summary= "Et molestie dui semper. quis auctor augue rhoncus in. Duis tristique accumsan."
    />
    <div className="container">
      <CaseResultList />
    </div>
    <GlobalContact />
  </Layout>
)

export default CaseResultsPage
