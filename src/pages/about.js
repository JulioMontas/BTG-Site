import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import CaseResultBtn from "../components/caseResultBtn"
import AttorneyBtn from "../components/attorneyBtn"
import ButtonCta from "../components/buttonCta"
import GlobalContact from "../components/globalContact"
import IntroText from "../components/introText"
import * as aboutStyles from "../styles/about.module.css"
import { graphql } from 'gatsby'
import { StructuredText } from "react-datocms";

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="The Firm" />
    <div className={aboutStyles.heroBG}>
      <StaticImage
        src="../images/the-team.jpg"
        alt="hero background"
        placeholder="blurred"
        layout="fullWidth"
        className={aboutStyles.heroPhoto}
      />
        <div className="container">
          <div className={aboutStyles.wrapper}>
            <h2 className="globalHero__text--title">{data.datoCmsAbout.title}</h2>
            <p className="globalHero__text--summary">{data.datoCmsAbout.description}</p>
          </div>
        </div>
    </div>

    <div
      className={aboutStyles.intro}
      style={{
        background: data.datoCmsAbout.topicBgColor.hex,
        color: data.datoCmsAbout.topicTColor.hex
      }}>
      <div className="container">
        <IntroText
          title={data.datoCmsAbout.topicTitle}
          summary={data.datoCmsAbout.topicDescription}
        />
      </div>
    </div>

    <div className={aboutStyles.attorneys} style={{ background: data.datoCmsAbout.attorneyBdColor.hex, color: data.datoCmsAbout.attorneyTColor.hex}}>
      <div className="container">
        <h2 className={aboutStyles.attorneysTitle}>
          {data.datoCmsAbout.attorneyTitle}
        </h2>

        <div className="gridLayout">
          {data.allDatoCmsAttorney.nodes.map(data => (
            <AttorneyBtn
              key={data.id}
              url={data.slug}
              location={data.location}
              title={data.name}
            />
          ))}
        </div>

      </div>
    </div>

    <div className={aboutStyles.secondIntro} style={{ background: data.datoCmsAbout.historyBgColor.hex, color: data.datoCmsAbout.historyTColor.hex}}>
      <div className="container">
        <StructuredText data={data.datoCmsAbout.historyContent} />
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


    <div
      className={aboutStyles.testimonial}
      style={{
        background: data.datoCmsAbout.testimonialBdColor.hex,
        color: data.datoCmsAbout.testimonialTColor.hex
    }}>
      <div className="container">
        <h2 className={aboutStyles.testimonialTitle}>
          {data.datoCmsAbout.testimonialTitle}
        </h2>
        <div className="cta">
          <ButtonCta
            url="/testimonial"
            title={"Testimonial"}
          />
        </div>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`{
  datoCmsAbout {
    id
    title
    description
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
  allDatoCmsAttorney {
    nodes {
      id
      slug
      name
      location
      caseResult {
        title
        slug
      }
      practiceArea {
        title
        slug
      }
      picture {
        url
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
  allDatoCmsTestimonial {
    nodes {
      content {
        content {
          value
        }
      }
    }
  }
}`

export default AboutPage
