import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from 'gatsby-plugin-image'

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
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
      title= "Guide & Resources"
      summary= "Text"
    />

    <div style={{
      background:`#1d3851`,
      padding:`6rem 1rem 6rem`
    }}>
    <div className="container">
      <div className="gridLayout">
      {data.allDatoCmsPost.nodes.map(data => (
        <AniLink paintDrip to={'/guide-and-resources/' + data.slug} hex="#3d586b">
          <GatsbyImage image={data.coverImage.gatsbyImageData} style={{borderRadius:`15px`}} />
          <h3 style={{fontSize:`1em`, marginTop:`0.5em`}}>{data.title}</h3>
        </AniLink>
      ))}
      </div>
    </div>
    </div>

    <div
      style={{
        background: `#FFF`,
        color: `#333`,
        padding:`5rem 1em 5rem`,
      }}
    >
      <div className="container">
        <h2 style={{marginBottom:`0.4em`}}>Frequently Asked Questions (FAQ)</h2>
        {data.datoCmsFaq.content.map(data => (
          <div
            style={{
              border:`1px solid #BCA360`,
              padding:`1em`,
              borderRadius:`8px`,
              marginBottom:`1.4em`,
            }}
          >
            <h2 style={{color:`rgb(29, 56, 81)`, fontSize:`1.25em`}}><b>{data.title}?</b></h2>
            <p style={{color:`rgb(61, 88, 107)`, fontSize:`1.125em`, padding: `0.5em 1em 0;`}}>{data.content}</p>
          </div>
        ))}
      </div>
    </div>

    <GlobalContact />
  </Layout>
)

export const query = graphql`{
  allDatoCmsPost(limit: 4) {
    nodes {
      id
      slug
      title
      excerpt
      coverImage {
        gatsbyImageData(width: 600, height: 400, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
  datoCmsFaq {
    title
    description
    content {
      id
      title
      content
    }
  }
}
`

export default BlogPage
