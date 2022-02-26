import * as React from "react"
import Layout from "../components/layout"
import GlobalHero from "../components/globalHero"
import GlobalContact from "../components/globalContact"
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { StructuredText } from "react-datocms";
import * as stylesTestimonial from "../styles/caseResultsArticle.module.css"
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

const TestimonialPage = ({ data: {site, siteTag, allTestimonials} }) => (
  <Layout>
    <HelmetDatoCms seo={siteTag.seoMetaTags} />
    <GlobalHero
      title={allTestimonials.title}
      summary={allTestimonials.description}
    />
    <div style={{ background: theme.colorsBG.secondary, color: theme.colorsText.primary }}>
      <div className="container">
        <div className={stylesTestimonial.quote}>
          {allTestimonials.content.map(data => (
            <div>
              <GatsbyImage image={data.photo.gatsbyImageData} />
              <StructuredText data={data.content} />
              <small>{data.date}</small>
                {data.socialMediaUrl.map(data => (
                  <p>
                    <a href={data.url}>
                      {data.label}
                    </a>
                  </p>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

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
      photo {
        gatsbyImageData(
          width: 130
          height: 130
          placeholder: BLURRED
          layout: FIXED
          forceBlurhash: false
        )
      }
    }
  }
}
`

export default TestimonialPage
