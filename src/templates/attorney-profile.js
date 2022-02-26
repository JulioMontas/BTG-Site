import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Avator from "../components/avator"
import GlobalContact from "../components/globalContact"
import GlobalHero from "../components/globalHero"
import CaseResultBtn from "../components/caseResultBtn"
import PracticeAreasBtn from "../components/practiceAreasBtn"
import { StructuredText } from "react-datocms";
import * as Styles from "../styles/attorneySinglePage.module.css"

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

const AttorneyProfile = ({ pageContext: { node } }) => {
  console.log(node);
  return (
    <Layout>
      <Seo title="Attorney Profile" />
      <GlobalHero
        title={node.name}
        summary={node.location}
      />

      <div className={Styles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
        <div className="container">
          <div className={Styles.descriptio}>
            <Avator />
            <div>
              <StructuredText data={node.content} />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.skills} style={{background: theme.colorsBG.primary}}>
        <div className="container">
          <h2 className={Styles.title}>
            Achievement
          </h2>
          <div>
            <StructuredText data={node.achievement} />
          </div>
        </div>
      </div>

      <div className={Styles.attorneys}>
        <div className="container">
          <h2 className={Styles.title}>
            Practice Area
          </h2>
          <div className="gridLayout">
          {node.practiceArea.map(data => (
            <PracticeAreasBtn
              key={data.id}
              url={data.slug}
              description={data.description}
              title={data.title}
            />
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
            <CaseResultBtn
              key={data.id}
              url={data.slug}
              description={data.subtitle}
              title={data.title}
            />
          ))}
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(node, null, 4)}</pre>
      <GlobalContact />

    </Layout>
  )
}

export default AttorneyProfile