import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import CaseResultList from "../components/caseResultList"
import AttorneyList from "../components/attorneyList"
import ButtonCta from "../components/buttonCta"
import GlobalContact from "../components/globalContact"
import * as aboutStyles from "../styles/about.module.css"

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

const AboutPage = () => (
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
            <h2 className="globalHero__text--title">The Firm</h2>
            <p className="globalHero__text--summary">Summary text</p>
          </div>
        </div>



    </div>








    <div className={aboutStyles.intro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
          <p>
            BTG is committed to protecting you and your family during the legal process. While many large firms build case loads of many hundreds of files, BTG believes this prevents a law firm from treating a client as an individual and meeting the unique needs of each case. For this reason, BTG is committed to maintaining a smaller case load. You will come to know the attorneys and staff at BTG on a first name basis as they ensure you realize personalized service throughout our relationship   with you.
          </p>
        </div>
    </div>

    <div className={aboutStyles.attorneys} style={{background: theme.colorsBG.primary, }}>
      <div className="container">
        <h2 className={aboutStyles.attorneysTitle}>
          Attorneys
        </h2>
        <AttorneyList />
      </div>
    </div>

    <div className={aboutStyles.secondIntro} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary}}>
      <div className="container">
        <p>Finally, the Barnes Trial Group was founded to send a loud and clear message to the insurance industry that BTG is prepared and committed to tirelessly litigate your case through trial should the insurance company fail to treat you or your family fairly. Our commitment to regularly and effectively trying cases empowers BTG with a reputation within the industry that allow us to fulfill your needs with strength, dignity and proven results.</p>
      </div>
    </div>

    <div className={aboutStyles.caseResultsList} style={{background: theme.colorsBG.primary, }}>
      <div className="container">
      <h2 className={aboutStyles.caseResultsTitle}>
        List of Case Results
      </h2>
      <CaseResultList />
      </div>
    </div>

    <div className={aboutStyles.testimonial}>
      <div className="container">
        <h2 className={aboutStyles.testimonialTitle}>
          Testimonial
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

export default AboutPage
