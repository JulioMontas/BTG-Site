import React from "react"
import Layout from "../../components/layout"
import GlobalHero from "../../components/globalHero"
import GlobalContact from "../../components/globalContact"
import { graphql } from 'gatsby'
import { StructuredText } from "react-datocms";
import * as stylesConsultation from "../../styles/caseResultsArticle.module.css"

function Thanks({ data: {allData} }) {
  return (
    <Layout>
    <GlobalHero
      title={allData.title}
      summary={allData.description}
    />
    <div style={{
      background:`#1d3851`,
      padding:`3rem 1rem 5rem`
    }}>
      <div className="container">
        <StructuredText data={allData.content} />
      </div>
    </div>
    <GlobalContact />
    </Layout>
  )
}

export const query = graphql`
  {
    allData: datoCmsThanksPage {
      id
      title
      description
      content {
        value
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

export default Thanks
