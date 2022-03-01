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

const TestimonialPage = () => (
  <Layout>
    <GlobalHero
      title="Testimonial"
      summary="Summary"
    />

    <div style={{ background: theme.colorsBG.secondary, color: theme.colorsText.primary }}>
      <div className="container">
        <div className={stylesTestimonial.quote}>

        </div>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export default TestimonialPage
