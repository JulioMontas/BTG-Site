import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import GlobalHero from "../../../components/globalHero"
import GlobalContact from "../../../components/globalContact"
import { StructuredText } from "react-datocms"
import { graphql } from 'gatsby'
import * as stylesConsultation from "../../../styles/caseResultsArticle.module.css"
import { HelmetDatoCms } from 'gatsby-source-datocms'

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

const ConsultationPage = ({ data: {siteTag, allData} }) => (
  <Layout>
    <HelmetDatoCms seo={siteTag.seoMetaTags} />
    <GlobalHero
      title={allData.title}
      summary={allData.description}
    />
    <div style={{ background: theme.colorsBG.secondary, color: theme.colorsText.primary }}>
      <div className="container">
        <div className={stylesConsultation.intro}>
          <StructuredText data={allData.content}/>
        </div>
      </div>
    </div>
    <GlobalContact />
  </Layout>
)

export const query = graphql`
  {
    siteTag: datoCmsConsultation {
      seoMetaTags {
        tags
      }
    }
    allData: datoCmsConsultation {
      id
      title
      description
      content {
        value
      }
    }
  }
`

export default ConsultationPage
