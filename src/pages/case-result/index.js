import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseResultBtn from "../../components/caseResultBtn"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { graphql } from 'gatsby'

const CaseResultsPage = ({data}) => (
  <Layout>
    <Seo title="Case Results" />
    <GlobalHero
      title= "Case Results"
      summary= "Et molestie dui semper. quis auctor augue rhoncus in. Duis tristique accumsan."
    />
    <div>
    <div className="container">
      <div
        className="gridLayout"
        style={{padding:`6rem 1rem 6rem`}}
      >
        {data.allDatoCmsCaseResult.nodes.map(data => (
          <CaseResultBtn
            key={data.id}
            url={data.slug}
            description={data.subtitle}
            title={data.title}
          />
        ))}
      </div>
    </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`{
    allDatoCmsCaseResult {
      nodes {
        id
        slug
        title
        subtitle
      }
    }
  }
`

export default CaseResultsPage
