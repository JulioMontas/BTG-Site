import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseResultBtn from "../../components/caseResultBtn"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { graphql } from 'gatsby'
import ButtonCta from "../../components/buttonCta"
import TestimonialBlock from "../../components/testimonialBlock"

const CaseResultsPage = ({data}) => (
  <Layout>
    <Seo title="Testimonial & Case Study" />
    <GlobalHero
      title= "Testimonial & Case Study"
      summary= "Latest review"
    />

    <div style={{
      background:`#1d3851`,
      padding:`3rem 1rem 5rem`
    }}>
    <div className="container">
      <div className="gridLayout">
        {data.allDatoCmsCaseResult.nodes.map(data => (
          <CaseResultBtn
            key={data.id}
            url={data.slug}
            description={data.subtitle}
            title={data.title}
          />
        ))}
      </div>
    </div>
    </div>

    <div style={{
      background:`#1d3851`,
      color: `#FFF`,
      padding:`3rem 1rem 5rem`,
      borderTop:`1px solid rgba(188, 163, 96, 0.2)`
    }}
    >
      <div className="container">
        <div>
          {data.allTestimonial.nodes.map(data => (
            <TestimonialBlock
              image={data.coverImage.gatsbyImageData}
              title={data.title}
              date={data.date}
              quote={data.quote}
             />
          ))}
          <div className="centerLink">
            <ButtonCta
              url="/testimonial-and-case-study/testimonial"
              title="Read more testimonial"
            />
          </div>
        </div>
      </div>
    </div>

    <GlobalContact />
  </Layout>
)

export const query = graphql`{
    allDatoCmsCaseResult {
      nodes {
        id
        slug
        title
        subtitle
      }
    }
    allTestimonial: allDatoCmsTestimonial(sort: {order: DESC, fields: meta___updatedAt}, limit: 1) {
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

export default CaseResultsPage
