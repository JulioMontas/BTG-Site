import * as React from "react"
import Layout from "../components/layout"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const FAQPage = ({ data: {site, siteTag, allFaqs} }) => (
  <Layout>
    <HelmetDatoCms seo={siteTag.seoMetaTags} />
    <GlobalHero
      title={allFaqs.title}
      summary={allFaqs.description}
    />
    <div
      style={{
        background: allFaqs.backgroundColor.hex,
        color: allFaqs.textColor.hex
      }}
    >
      <div className="container">
        {allFaqs.content.map(data => (
          <div>
            <p><b>{data.title}?</b></p>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`
  {
    site: datoCmsFaviconMetaTags {
      tags
    }
    siteTag: datoCmsFaq {
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
        hex
      }
      textColor {
        hex
      }
    }
  }
`

export default FAQPage
