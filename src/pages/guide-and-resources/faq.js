import * as React from "react"
import Layout from "../../components/layout"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import * as stylesConsultation from "../../styles/caseResultsArticle.module.css"

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
        color: allFaqs.textColor.hex,
        padding:`5rem 1em 5rem`,
      }}
    >
      <div className="container">
        {allFaqs.content.map(data => (
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
