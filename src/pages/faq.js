import * as React from "react"
import Layout from "../components/layout"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

export const query = graphql`
  {
    site: datoCmsFaviconMetaTags {
      tags
    }
    faq: datoCmsFaq {
      seoMetaTags {
        tags
      }
    }
    allFaqs: datoCmsFaq {
      title
      description
      content {
        id
        title
        content
      }
      backgroundColor {
        rgb
      }
      textColor {
        rgb
      }
    }
  }
`

const FAQPage = ({ data: {site, faq, allFaqs} }) => (
  <Layout>
    <HelmetDatoCms seo={faq.seoMetaTags} />
    <GlobalHero
      title= {allFaqs.title}
      summary= {allFaqs.description}
    />
    <div className="container">
      {allFaqs.content.map(data => (
        <div>
          <p><b>{data.title}?</b></p>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
    <GlobalContact />
  </Layout>
)

export default FAQPage
