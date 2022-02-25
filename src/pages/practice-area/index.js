import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PracticeAreasBtn from "../../components/practiceAreasBtn"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import * as praticeAreasStyles from "../../components/praticeAreasList.module.css"
import { graphql } from 'gatsby'

const PraticeAreasPage = ({ data }) => (
  <Layout>
    <Seo title="Pratice Areas" />
    <GlobalHero
      title= "Pratice Areas"
      summary= "Ipsum at enim fermentum, et molestie dui semper. Quis auctor augue rhoncus in."
    />
    <div className="container">
      <div
        className={praticeAreasStyles.wrapper}
        style={{padding:`6rem 1rem 6rem`}}
      >
        {data.allDatoCmsPracticeArea.nodes.map(data => (
          <PracticeAreasBtn
            key={data.id}
            url={data.slug}
            description={data.description}
            title={data.title}
          />
        ))}
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`{
    allDatoCmsPracticeArea {
      nodes {
        id
        slug
        title
        subtitle
      }
    }
  }
`

export default PraticeAreasPage
