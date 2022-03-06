import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
      summary= "Frequently Asked Questions (FAQ)"
    />

    <div
      style={{
        background: `#FFF`,
        color: `#333`,
        padding:`5rem 1em 5rem`,
      }}
    >
      <div className="container">
        <p>We have created a list of some of the most commonly asked questions and answered them below to better assist our clients.</p>
        {data.datoCmsFaq.content.map(data => (
          <div
            style={{
              border:`1px solid #BCA360`,
              padding:`1em`,
              borderRadius:`10px`,
              marginBottom:`1.4em`,
            }}
          >
            <h2 style={{color:`rgb(29, 56, 81)`, fontSize:`1.25em`}}><b>{data.title}?</b></h2>
            <p style={{color:`rgb(61, 88, 107)`, fontSize:`1.125em`, padding: `0.5em 1em 0;`}}>{data.content}</p>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      background:`#1d3851`,
      borderBottom:`1px solid rgba(188, 163, 96, 0.2)`,
      padding:`3rem 1rem 5rem`
    }}>
    <div className="container">
      <div className="gridLayout">
      {data.allDatoCmsPost.nodes.map(data => (
        <AniLink paintDrip to={'/guide-and-resources/' + data.slug} hex="#3d586b">
          {data.title}
        </AniLink>
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
