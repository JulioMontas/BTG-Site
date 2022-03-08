import * as React from "react"
import Layout from "../../components/layout"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import TestimonialBlock from "../../components/testimonialBlock"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StructuredText } from "react-datocms";
import { GatsbyImage } from 'gatsby-plugin-image';

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const TestimonialPage = ({data}) => (
  <Layout>
    <GlobalHero
      title="Testimonial"
      summary="Summary"
    />
    <div style={{ background: theme.colorsBG.primary, color: theme.colorsText.secondary }}>
      <div className="container">
      <div className="gridLayout">
       {data.allTestimonial.nodes.map(data => (
         <TestimonialBlock
           image={data.coverImage.gatsbyImageData}
           title={data.title}
           date={data.date}
           quote={data.quote}
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
    allTestimonial: allDatoCmsTestimonial(
      sort: {order: DESC, fields: meta___updatedAt}){
      nodes {
        id
        title
        date
        quote
        coverImage {
          gatsbyImageData(width: 100, height: 100, placeholder: TRACED_SVG, layout: FIXED)
        }
      }
    }
  }
`

export default TestimonialPage
