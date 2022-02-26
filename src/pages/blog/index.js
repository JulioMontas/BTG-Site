import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

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
        <Link
          to={'/blog/' + data.slug}
          style={{
            color: `#FFF`,
            background: `#bca360`,
            padding: `1rem`,
            borderRadius: `10px`,
          }}
        >
          <h3
          style={{
            fontSize: `1.2em`,
            lineHeight: `160%`,
            color:`#1d3851`
          }}

          >
            {data.title}
          </h3>
        </Link>
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
