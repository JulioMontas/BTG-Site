import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from "styled-components"

const BlogLink = styled.div`
  color: #bca360;
  transform: scale(0.9);
  transition: 0.3s;
  opacity: 0.95;
    &:hover {
      color: #A78D49;
      transform: scale(1);
      opacity: 1;
    }
`
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

    <div
      style={{
        background: `#1d3851`,
        color: `#FFF`,
        padding:`2rem 1em 1rem`,
      }}
    >
      <div className="container">
        <h2 style={{marginBottom:`0.7em`}}>Frequently Asked Questions (FAQ)</h2>
        {data.datoCmsFaq.content.map(data => (
          <div
            style={{
              border:`2px solid #BCA360`,
              padding:`1em`,
              borderRadius:`8px`,
              marginBottom:`1em`,
              letterSpacing:`2px`,
            }}
          >
            <h2 style={{fontSize:`1.25rem`,letterSpacing:`1px`}}><b>{data.title}?</b></h2>
            <p style={{color:`rgb(206, 206, 207)`, fontSize:`1.125rem`, letterSpacing:`1px`}}>{data.content}</p>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      background:`#1d3851`,
      padding:`6rem 1rem 6rem`
    }}>
    <div className="container">
      <h2 style={{marginBottom:`0.7em`}}>Latest Article</h2>
      <div className="gridLayout">
      {data.allDatoCmsPost.nodes.map(data => (
        <AniLink paintDrip to={'/guide-and-resources/' + data.slug} hex="#3d586b">
          <BlogLink>
          <GatsbyImage image={data.coverImage.gatsbyImageData} style={{borderRadius:`15px`}} />
          <h2 style={{fontSize:`1.2rem`, marginTop:`0.5em`}}>{data.title}</h2>
          </BlogLink>
        </AniLink>
      ))}
      </div>
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
