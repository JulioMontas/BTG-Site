import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalHero from "../components/globalHero"
import { StructuredText } from "react-datocms";
import GlobalContact from "../components/globalContact"
import AttorneyBtn from "../components/attorneyBtn"
import * as caseResultsArticleStyles from "../styles/caseResultsArticle.module.css"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
    tertiary: `#3d586b`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const AttorneyAreaPost = ({ pageContext: { node} }) => (
  <Layout>
    <Seo title={"Practice Area: " + node.title} />
    <GlobalHero
      title={"Practice Area: " + node.title}
      summary={node.subtitle}
    />

    <div style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary,}}>
      <div className="container">
        <div className={caseResultsArticleStyles.intro}>
          <StructuredText data={node.content}/>
        </div>
      </div>
    </div>
    
    {node.attorney.length > 0 &&
    <div style={{background: theme.colorsBG.tertiary, color: theme.colorsText.primary,  padding:`5rem 1rem 5rem`}}>
      <div className="container">
      <div className="gridLayout">
        {node.attorney.map(data => (
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
    }
    <GlobalContact />
  </Layout>
)

export default AttorneyAreaPost
