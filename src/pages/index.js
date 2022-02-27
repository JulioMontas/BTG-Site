import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ButtonCta from "../components/buttonCta"
import CaseResultList from "../components/caseResultList"
import PraticeAreasList from "../components/praticeAreasList"
import PracticeAreasBtn from "../components/practiceAreasBtn"
import CaseResultBtn from "../components/caseResultBtn"
import Avator from "../components/avator";
import * as homeStyles from "../styles/home.module.css"
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import GlobalContact from "../components/globalContact"

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

const IndexPage = ({ data: {siteColor, siteData, allCaseResult, allAttorney, allPracticeArea, allBlogPost} }) => (
  <Layout>
    <Seo title="BTG Homepage" />
    <div className={homeStyles.homeHeroBG}>
      <GatsbyImage image={siteData.coverImage.gatsbyImageData} className={homeStyles.homeHeroPhoto} />
      <div className="container">
        <div className={homeStyles.homeWrapper}>
          <h2 className={homeStyles.homeHeroTitle}>{siteData.title}</h2>
          <p className={homeStyles.homeHeroDescription}>{siteData.description}</p>
          <div className={homeStyles.homeHeroCTA}>
            {siteData.ctaIntro.map(data => (
              <div>
                <ButtonCta
                  url={data.url}
                  title={data.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className={homeStyles.caseResultList} style={{background: siteData.caseResultBgColor.hex, color: siteData.caseResultTextColor.hex }}>
      <div className="container">
        <p className={homeStyles.featureSummary}>{siteData.caseResultDescription}</p>
        <div className="gridLayout">
          {allCaseResult.nodes.map(data => (
            <CaseResultBtn
              url={data.slug}
              description={data.subtitle}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </div>

    <div className={homeStyles.homeTheFirmBG} style={{background: siteData.aboutBgColor.hex, color: siteData.aboutTextColor.hex }}>
      <div className="container">
        <div className={homeStyles.twoColumnsGrid}>
          <div className={homeStyles.avatorList}>
            {allAttorney.nodes.map(data => (
              <div>
              <Link to={'/attorney/' + data.slug}>
                <GatsbyImage image={data.picture.gatsbyImageData} className={homeStyles.heroPhoto}/>
              </Link>
              </div>
            ))}
          </div>
          <div className={homeStyles.avatorSummary}>
            <h2 className={homeStyles.avatorTitle}>{siteData.aboutTitle}</h2>
            <p>{siteData.aboutSummary}</p>
            <div className="cta">
              {siteData.ctaAbout.map(data => (
                <div>
                  <ButtonCta
                    url={data.url}
                    title={data.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={homeStyles.homeTestimonial} style={{background: siteData.testimonialBdColor.hex, color: siteData.testimonialTextColor.hex }}>
      <div className="container">
      <div className="wrapper">
      <h2 className={homeStyles.testimonialTitle}>{siteData.testimonialTitle}</h2>
        <div className="cta">
          <ButtonCta
            url="/testimonial"
            title={"Testimonial"}
          />
        </div>
      </div>
      </div>
    </div>

    <div className={homeStyles.homePraticeAreasList} style={{background: siteData.praticeAreaBdColor.hex, color: siteData.praticeAreaTextColor.hex }}>
      <div className="container">
        <p className={homeStyles.featureSummary}>{siteData.praticeAreaDescription}</p>
        <div className="gridLayout">
        {allPracticeArea.nodes.map(data => (
          <div>
            <PracticeAreasBtn
              url={data.slug}
              description={data.description}
              title={data.title}
              image={data.coverImage.gatsbyImageData}
            />
          </div>
        ))}
        </div>
      </div>
    </div>

    <div className={homeStyles.homeBlogLatestPost} style={{background: siteData.blogBdColor.hex, color: siteData.blogTextColor.hex }}>
      <div className="container">
      <div className={homeStyles.twoColumnsGrid}>
        <h2 className={homeStyles.blogTitle}>
          {siteData.blogTitle}
        </h2>
        <div className={homeStyles.blogCTA}>
         <ButtonCta
            url="/blog"
            title={"Blog"}
          />
        </div>
        </div>
      </div>
    </div>

    <GlobalContact />
  </Layout>
)

export const query = graphql`
  {
    siteColor: datoCmsThemeColor {
      primaryBgColor {
        hex
      }
      secondaryBgColor {
        hex
      }
      tertiaryBgColor {
        hex
      }
      quaternaryBgColor {
        hex
      }
      primaryTextColor {
        hex
      }
      secondaryTextColor {
        hex
      }
    }
    siteData: datoCmsHomepage {
      id
      title
      description
      ctaIntro {
        label
        url
      }
      caseResultDescription
      caseResultBgColor {
        hex
      }
      caseResultTextColor {
        hex
      }
      aboutTitle
      aboutSummary
      ctaAbout {
        label
        url
      }
      aboutBgColor {
        hex
      }
      aboutTextColor {
        hex
      }
      testimonialTitle
      testimonialBdColor {
        hex
      }
      testimonialTextColor {
        hex
      }
      praticeAreaDescription
      praticeAreaBdColor {
        hex
      }
      praticeAreaTextColor {
        hex
      }
      blogTitle
      blogBdColor {
        hex
      }
      blogTextColor {
        hex
      }
      coverImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    allCaseResult: allDatoCmsCaseResult {
      nodes {
        title
        subtitle
        slug
      }
    }
    allPracticeArea: allDatoCmsPracticeArea {
      nodes {
        title
        slug
        coverImage {
          gatsbyImageData(
            width: 300
            height: 250
            layout: CONSTRAINED
            forceBlurhash: false
            placeholder: BLURRED
          )
        }
      }
    }
    allAttorney: allDatoCmsAttorney {
      nodes {
        name
        slug
        picture {
          gatsbyImageData(width: 100, height: 100, placeholder: TRACED_SVG, layout: FIXED)
        }
      }
    }
    allTestimonial: allDatoCmsTestimonial(limit: 1) {
      nodes {
        content {
          id
          content {
            value
          }
          photo {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
    allBlogPost: allDatoCmsPost(limit: 4) {
      nodes {
        title
        excerpt
        slug
        coverImage {
          gatsbyImageData
        }
      }
    }
  }
`

export default IndexPage
