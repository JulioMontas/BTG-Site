import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import GlobalHero from "../../../components/globalHero"
import ButtonCta from "../../../components/buttonCta"
import Avator from "../../../components/avator"
import AttorneyList from "../../../components/attorneyList"
import GlobalContact from "../../../components/globalContact"
import * as Styles from "../../../styles/attorneySinglePage.module.css"

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

const AttorneysSinglePage = () => (
  <Layout>
    <Seo title="Stephen A. Barnes | Attorney" />
    <GlobalHero
      title= "Stephen A. Barnes"
      summary= "Summary text"
    />
    <div className={Styles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
        <div className={Styles.descriptio}>
          <Avator />
          <div>
            <p className={Styles.summary}>The founder of The Barnes Trial Group, Mr. Barnes exclusively represents family members and victims of personal injury and wrongful death. One hundred percent of his practice is dedicated to representing these persons in their pursuit of justice and fair compensation for the harms and losses suffered as a result of the inattention and carelessness of other people and companies.</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>

    <div className={Styles.skills} style={{background: theme.colorsBG.primary}}>
      <div className="container">
        <h2 className={Styles.title}>
          Awards
        </h2>
        <nav className={Styles.awards}>
          <ul>
            <b>Litigation Percentage</b>
            <li>100% of Practice Devoted to Litigation</li>
          </ul>
          <ul>
            <b>Education</b>
            <li>Stetson University College of Law (J.D.)</li>
            <li>University of Florida (B.A.)</li>
          </ul>
          <ul>
            <b>Pro Bono Activities</b>
            <li>South Tampa Fellowship</li>
          </ul>
          <ul>
            <b>Memberships</b>
            <li>Florida Bar Association</li>
            <li>Florida Justice Association</li>
          </ul>
          <ul>
            <b>Honors and Awards</b>
            <li>AV Preeminent* peer review rated by Martindale-Hubbell</li>
          </ul>
          <ul>
            <b>Areas of Practice</b>
            <div>
              <ButtonCta
                url="/"
                title={"Personal Injury"}
              />
              <ButtonCta
                url="/"
                title={"Wrongful Death"}
              />
            </div>
          </ul>
        </nav>
      </div>
    </div>

    <div className={Styles.video}>
      <div className="container">
        <div>
          <h2 className={Styles.title}>
            Video
          </h2>
        </div>
      </div>
    </div>

    <div className={Styles.attorneys} style={{background: theme.colorsBG.primary}}>
      <div className="container">
        <h2 className={Styles.title}>
          Other Attorneys
        </h2>
        <AttorneyList />
      </div>
    </div>

    <GlobalContact />

  </Layout>
)

export default AttorneysSinglePage
