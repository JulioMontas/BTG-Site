import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { StructuredText } from "react-datocms"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GlobalContact from "../../components/globalContact"
import ButtonCta from "../../components/buttonCta"
import CaseResultBtn from "../../components/caseResultBtn"
import AttorneyBtn from "../../components/attorneyBtn"
import TestimonialBlock from "../../components/testimonialBlock"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as aboutStyles from "../../styles/about.module.css"

const AboutPage = ({data}) => (
  <Layout>
    <HelmetDatoCms seo={data.siteTag.seoMetaTags} />
    <div className={aboutStyles.heroBG}>
      <GatsbyImage image={data.datoCmsAbout.coverImage.gatsbyImageData} className={aboutStyles.heroPhoto} />
      <div className="container">
        <div className={aboutStyles.wrapper}>
          <h2 className="globalHero__text--title">{data.datoCmsAbout.title}</h2>
          <p className="globalHero__text--summary">{data.datoCmsAbout.description}</p>
        </div>
      </div>
    </div>

    <div className={aboutStyles.intro} style={{ background: data.datoCmsAbout.topicBgColor.hex, color: data.datoCmsAbout.topicTColor.hex }}>
      <div className="container">
        <div className="twoColumnsGrid">
          <h2>{data.datoCmsAbout.topicTitle}</h2>
          <p>{data.datoCmsAbout.topicDescription}</p>
        </div>
      </div>
    </div>

    <div className={aboutStyles.intro} style={{ background: data.datoCmsAbout.attorneyBdColor.hex, color: data.datoCmsAbout.attorneyTColor.hex}}>
      <div className="container">
        <h2 className={aboutStyles.attorneysTitle}>
          {data.datoCmsAbout.attorneyTitle}
        </h2>
        <div className="gridLayout">
          {data.allDatoCmsAttorney.nodes.map(data => (
            <AttorneyBtn
              slug={data.slug}
              image={data.picture.gatsbyImageData}
              location={data.location}
              title={data.name}
            />
          ))}
        </div>
      </div>
    </div>

    <div className={aboutStyles.intro} style={{ background: data.datoCmsAbout.historyBgColor.hex, color: data.datoCmsAbout.historyTColor.hex}}>
      <div className="container">
        <div className={aboutStyles.intro__summaryText}>
        <StructuredText data={data.datoCmsAbout.historyContent}/>
        </div>
      </div>
    </div>

    <div className={aboutStyles.caseResultsList} style={{ background: data.datoCmsAbout.caseResultBgColor.hex, color: data.datoCmsAbout.caseResultTColor.hex}}>
      <div className="container">
        <h2 className={aboutStyles.attorneysTitle}>
          {data.datoCmsAbout.caseResultTitle}
        </h2>
        <div className="gridLayout">
          {data.allDatoCmsCaseResult.nodes.map(data => (
            <CaseResultBtn
              url={data.slug}
              description={data.subtitle}
              title={data.title}
            />
          ))}
         </div>
      </div>
    </div>

    <GlobalContact />
  </Layout>
)

export const query = graphql`{
  siteTag: datoCmsAbout {
    seoMetaTags {
      tags
    }
  }
  datoCmsAbout {
    id
    title
    description
    coverImage {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
    gradientTColor {
      alpha
      rgb
    }
    gradientBColor {
      alpha
      rgb
    }
    topicTitle
    topicDescription
    topicBgColor {
      hex
    }
    topicTColor {
      hex
    }
    attorneyTitle
    attorneyBdColor {
      hex
    }
    attorneyTColor {
      hex
    }
    historyContent {
      value
    }
    historyBgColor {
      hex
    }
    historyTColor {
      hex
    }
    caseResultTitle
    caseResultBgColor {
      hex
    }
    caseResultTColor {
      hex
    }
    testimonialTitle
    testimonialBdColor {
      hex
    }
    testimonialTColor {
      hex
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
  allDatoCmsAttorney {
    nodes {
      id
      slug
      name
      location
      picture {
        gatsbyImageData(
          width: 100,
          height: 100,
          placeholder: BLURRED,
          layout: FIXED
        )
      }
    }
  }
  allDatoCmsCaseResult {
    nodes {
      id
      title
      subtitle
      slug
    }
  }
}`

export default AboutPage
