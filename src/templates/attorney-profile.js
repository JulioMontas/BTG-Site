import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GlobalContact from "../components/globalContact"
import GlobalHero from "../components/globalHero"
import CaseResultBtn from "../components/caseResultBtn"
import PracticeAreasBtn from "../components/practiceAreasBtn"
import { StructuredText } from "react-datocms";
import * as Styles from "../styles/attorneySinglePage.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

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

const AttorneyProfile = ({ pageContext: { node } }) => {
  return (
    <Layout>
      <Seo title="Attorney Profile" />
      <GlobalHero
        title={node.name}
        summary={node.location}
      />
      <div className={Styles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
        <div className="container">
          <div className={Styles.description}>
            <div>
              <StructuredText data={node.content} />
            </div>
                        <GatsbyImage image={node.picture.gatsbyImageData} className={Styles.roundImage}/>
          </div>
        </div>
      </div>

      <div className={Styles.skills}>
        <div className="container">
          <div>
            <StructuredText data={node.achievement} />
          </div>
        </div>
      </div>

      <div className={Styles.skills} style={{background: theme.colorsBG.primary, color: theme.colorsText.secondary}}>
        <div className="container">
          <h2 className={Styles.title}>
            Practice Area
          </h2>
          <div className="gridLayout">
          {node.practiceArea.map(data => (
            <div>
            <PracticeAreasBtn
              url={'/practice-area/' + data.slug}
              description={data.description}
              title={data.title}
              image={data.coverImage.gatsbyImageData}
            />
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className={Styles.attorneys}>
        <div className="container">
          <h2 className={Styles.title}>
            Case Result
          </h2>
          <div className="gridLayout">
          {node.caseResult.map(data => (
            <div>
            <CaseResultBtn
              url={data.slug}
              description={data.subtitle}
              title={data.title}
            />
            </div>
          ))}
          </div>
        </div>
      </div>
      <GlobalContact />
    </Layout>
  )
}

export default AttorneyProfile
