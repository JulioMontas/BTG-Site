import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PracticeAreasBtn from "../../components/practiceAreasBtn"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"

const PraticeAreasPage = ({ data: { allData } }) => (
  <Layout>
    <Seo title="Services" />
    <GlobalHero
      title="Services"
      summary="Pratice Area"
    />
    <div style={{
      background:`#1d3851`,
      padding:`3rem 1rem 5rem`
    }}>
      <div className="container">
        <div className="gridLayout">
          {allData.nodes.map(data => (
            <div>
            <PracticeAreasBtn
              url={data.slug}
              description={data.description}
              title={data.title}
              image={data.coverImage.gatsbyImageData}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`{
  allData: allDatoCmsPracticeArea {
    nodes {
      id
      slug
      title
      subtitle
      coverImage {
        gatsbyImageData(
          width: 300
          height: 250
          layout: CONSTRAINED
          forceBlurhash: false
          placeholder: BLURRED
        )
      }
    }
  }
}
`

export default PraticeAreasPage
