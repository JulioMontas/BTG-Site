import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import AttorneyBtn from "../../components/attorneyBtn"

const AttorneysPage = ({ data: { siteData } }) => (
  <Layout>
    <Seo title="Attorneys" />
    <GlobalHero
      title="Attorneys"
      summary= "Summary text"
    />
    <div style={{
      background:`#1d3851`,
      borderBottom:`1px solid rgba(188, 163, 96, 0.2)`,
      padding:`3rem 1rem 5rem`
    }}>
      <div className="container">
      <div className="gridLayout">
        {siteData.nodes.map(data => (
          <AttorneyBtn
            slug={data.slug}
            image={data.picture.gatsbyImageData}
            location={data.location}
            title={data.name}
          />
        ))}
      </div>

      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`
  {
    siteData: allDatoCmsAttorney {
      nodes {
        id
        slug
        name
        location
        picture {
          gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, layout: FIXED)
        }
      }
    }
  }
`

export default AttorneysPage
