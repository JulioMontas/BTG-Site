import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import PracticeAreasBtn from "../../components/practiceAreasBtn"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
     v: `#FFF`,
    test: `green`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const BlogPage = ({data}) => (
  <Layout>
    <Seo title="Blog" />
    <GlobalHero
      title= "Blog"
      summary= "Etiam hendrerit ipsum at enim fermentum."
    />
    <div style={{background: theme.colorsBG.secondary}}>
    <div className="container">
      <div className="gridLayout" style={{padding:`6rem 1rem 6rem`}}>
      {data.allDatoCmsPost.nodes.map(data => (
        <PracticeAreasBtn
          url={'/blog/' + data.slug}
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
    allDatoCmsPost {
      nodes {
        id
        slug
        title
        excerpt
      }
    }
  }
`

export default BlogPage
