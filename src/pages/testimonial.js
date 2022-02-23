import * as React from "react"
import Layout from "../components/layout"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StructuredText } from "react-datocms";

export const query = graphql`{
  site: datoCmsFaviconMetaTags {
    tags
  }
  siteTag: datoCmsTestimonial {
    seoMetaTags {
      tags
    }
  }
  allTestimonials: datoCmsTestimonial {
    title
    description
    content {
      date
      content {
        value
      }
      socialMediaUrl {
        label
        url
      }
    }
  }
}
`

const TestimonialPage = ({ data: {site, siteTag, allTestimonials} }) => (
  <Layout>
    <HelmetDatoCms seo={siteTag.seoMetaTags} />
    <GlobalHero
      title={allTestimonials.title}
      summary={allTestimonials.description}
    />
    <div style={{ }}>
      <div className="container">
        {allTestimonials.content.map(data => (
          <div>
            <small>{data.date}</small>
            <StructuredText data={data.content} />
          </div>
        ))}

      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default TestimonialPage
