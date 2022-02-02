import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
import CaseResultList from "../components/caseResultList"
import AttorneyList from "../components/attorneyList"
import ButtonCta from "../components/buttonCta"

import * as aboutStyles from "../styles/about.module.css"

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

const AboutPage = () => (
  <Layout>
    <Seo title="The Firm" />
    <div className={aboutStyles.heroBG}>
      <Container>
        <h2 className={aboutStyles.title}>The Firm</h2>
      </Container>
    </div>

    <div className={aboutStyles.intro}>
      <Container>
        <div>
          <p>
            BTG is committed to protecting you and your family during the legal process. While many large firms build case loads of many hundreds of files, BTG believes this prevents a law firm from treating a client as an individual and meeting the unique needs of each case. For this reason, BTG is committed to maintaining a smaller case load. You will come to know the attorneys and staff at BTG on a first name basis as they ensure you realize personalized service throughout our relationship   with you.
          </p>
        </div>
        </Container>
    </div>

    <div className={aboutStyles.attorneys} style={{background: theme.colorsBG.primary, }}>
      <Container>
        <h2 className={aboutStyles.attorneysTitle}>
          Attorneys
        </h2>
        <AttorneyList />
      </Container>
    </div>

    <div className={aboutStyles.secondIntro}>
      <Container>
        <p>Finally, the Barnes Trial Group was founded to send a loud and clear message to the insurance industry that BTG is prepared and committed to tirelessly litigate your case through trial should the insurance company fail to treat you or your family fairly. Our commitment to regularly and effectively trying cases empowers BTG with a reputation within the industry that allow us to fulfill your needs with strength, dignity and proven results.</p>
      </Container>
    </div>

    <div className={aboutStyles.caseResultsList} style={{background: theme.colorsBG.primary, }}>
      <Container>
      <h2 className={aboutStyles.caseResultsTitle}>
        List of Case Results
      </h2>
      <CaseResultList />
      </Container>
    </div>

    <div className={aboutStyles.testimonial}>
      <Container>
        <h2 className={aboutStyles.testimonialTitle}>
          Testimonial
        </h2>
        <div className="cta">
          <ButtonCta
            url="/testimonial"
            title={"Testimonial"}
          />
        </div>
      </Container>
    </div>
  </Layout>
)

export default AboutPage
