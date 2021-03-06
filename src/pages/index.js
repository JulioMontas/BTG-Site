import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalContact from "../components/globalContact"
import ButtonCta from "../components/buttonCta"
import PracticeAreasBtn from "../components/practiceAreasBtn"
import CaseResultBtn from "../components/caseResultBtn"
import TestimonialBlock from "../components/testimonialBlock"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as homeStyles from "../styles/home.module.css"


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

const IndexPage = ({ data: {siteColor, siteData, allCaseResult, allAttorney, allTestimonial, allPracticeArea, allBlogPost, map} }) => (
  <Layout>
    <Seo title="Homepage" />
    <div className={homeStyles.homeHeroBG}>
      <GatsbyImage image={siteData.coverImage.gatsbyImageData} className={homeStyles.homeHeroPhoto} />
      <div className="container">
        <div className={homeStyles.homeWrapper}>
          <h1 className={homeStyles.homeHeroTitle}>{siteData.title}</h1>
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

    <div className={homeStyles.homePadding} style={{background: siteData.caseResultBgColor.hex, color: siteData.caseResultTextColor.hex }}>
      <div className="container">
        <h2 className={homeStyles.sectionSummary}>{siteData.caseResultDescription}</h2>
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

    <div className={homeStyles.homePadding} style={{background: siteData.aboutBgColor.hex, color: siteData.aboutTextColor.hex }}>
      <div className="container">
        <div className="twoColumnsGrid">
          <div className={homeStyles.avatorList}>
            {allAttorney.nodes.map(data => (
              <div>
              <AniLink paintDrip to={'about-us/attorney/' + data.slug} hex="#3d586b">
                <GatsbyImage image={data.picture.gatsbyImageData} className={homeStyles.heroPhoto}/>
              </AniLink>
              </div>
            ))}
          </div>
          <div className={homeStyles.avatorSummary}>
            <h2>{siteData.aboutTitle}</h2>
            <p>{siteData.aboutSummary}</p>
            <div className="cta">
              {siteData.ctaAbout.map(data => (
                <div>
                  <ButtonCta
                    url="about-us"
                    title={data.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className={homeStyles.homePadding} style={{background: siteData.testimonialBdColor.hex, color: siteData.testimonialTextColor.hex }}>
      <div className="container">
        {allTestimonial.nodes.map(data => (
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




    <div className={homeStyles.homePadding} style={{background: siteData.praticeAreaBdColor.hex, color: siteData.praticeAreaTextColor.hex }}>
      <div className="container">
        <h2 className={homeStyles.sectionSummary}>{siteData.praticeAreaDescription}</h2>
        <div className="gridLayout">
        {allPracticeArea.nodes.map(data => (
          <div>
            <PracticeAreasBtn
              url={'/services/' + data.slug}
              description={data.description}
              title={data.title}
              image={data.coverImage.gatsbyImageData}
            />
          </div>
        ))}
        </div>
      </div>
    </div>

    {/*
    <div className={homeStyles.homePadding} style={{background: siteData.blogBdColor.hex, color: siteData.blogTextColor.hex }}>
      <div className="container">
        <div className="twoColumnsGrid">
          <div>
              {allBlogPost.nodes.map(data => (
                <AniLink paintDrip to={'/blog/' + data.slug} hex="#3d586b">
                  <h3 className={homeStyles.blog__link}>
                    {data.title}
                  </h3>
                </AniLink>
              ))}
          </div>
          <div className={homeStyles.blogCTA}>
            <ButtonCta
              url="/blog"
              title={"Read More Article"}
            />
          </div>
        </div>
      </div>
    </div>
    */}

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
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
          alt
        }
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
          alt
        }
      }
    }
    allAttorney: allDatoCmsAttorney {
      nodes {
        name
        slug
        picture {
          gatsbyImageData(width: 100, height: 100, placeholder: TRACED_SVG, layout: FIXED)
          alt
        }
      }
    }
    allBlogPost: allDatoCmsPost(limit: 3) {
      nodes {
        title
        excerpt
        slug
        coverImage {
          gatsbyImageData
          alt
        }
      }
    }
  }
`

export default IndexPage
