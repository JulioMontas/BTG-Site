import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PracticeAreasBtn from "../../components/practiceAreasBtn"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { graphql } from 'gatsby'


const PraticeAreasPage = ({ data: { allData } }) => (
  <Layout>
    <Seo title="Pratice Area" />
    <GlobalHero
      title="Pratice Area"
      summary="Ipsum at enim fermentum, et molestie dui semper. Quis auctor augue rhoncus in."
    />
    <div className="container">
      <div className="gridLayout" style={{padding:`6rem 1rem 6rem`}}>
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
