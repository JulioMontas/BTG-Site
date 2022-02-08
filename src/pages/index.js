import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import ButtonCta from "../components/buttonCta"
import CaseResultList from "../components/caseResultList"
import PraticeAreasList from "../components/praticeAreasList"
import Avator from "../components/avator";
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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className={homeStyles.homeHeroBG}>
      <StaticImage
        src="../images/hero-bg.jpg"
        alt="hero background"
        placeholder="blurred"
        layout="fullWidth"
        className={homeStyles.homeHeroPhoto}
      />
      <div className="container">
        <div className={homeStyles.homeWrapper}>
          <h2 className={homeStyles.homeHeroTitle}>Securing The Results Our Clients Deserve</h2>
          <p className={homeStyles.homeHeroDescription}>Our goal is to secure the compensation you need to help rebuild your life.</p>
          <div className={homeStyles.homeHeroCTA}>
            <ButtonCta
              url="/contact/consultation/"
              title={"Free Consultation"}
            />
          </div>
        </div>
      </div>
    </div>






    <div className={homeStyles.caseResultList} style={{background: theme.colorsBG.primary, }}>
      <div className="container">
        <p className={homeStyles.featureSummary}>A serious injury can easily derail a person’s life. We know how to fight for our clients and win.</p>
        <CaseResultList />
      </div>
    </div>

    <div className={homeStyles.homeTheFirmBG} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary, }}>
      <div className="container">
        <div className={homeStyles.twoColumnsGrid}>
          <div className={homeStyles.avatorList}>
            <Avator />
            <Avator />
            <Avator />
            <Avator />
            <Avator />
          </div>
          <div className={homeStyles.avatorSummary}>
            <h2 className={homeStyles.avatorTitle}>Trial Lawyer Committed to Serving the Injured</h2>
            <p>With more than 25 years of combined experience and a focus on providing the most effective trial representation available, we have been able to build a record of positive results for our clients that we are proud of.</p>
            <p>Our firm is dedicated to creating the positive results people need after they have been hurt in serious accidents. We know that most people simply want to recover the life they had before an accident. We have the experience and skill necessary to secure the full compensation people will need to be able to overcome the obstacles that stand in their way. </p>
            <div className="cta">
              <ButtonCta
                url="/about"
                title={"The Firm"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={homeStyles.homeTestimonial}>
      <div className="container">
      <div className="wrapper">
      <h2 className={homeStyles.testimonialTitle}>Testimonial</h2>
        <div className="image">

        </div>
        <div className="cta">
          <ButtonCta
            url="/testimonial"
            title={"Testimonial"}
          />
        </div>
      </div>
      </div>
    </div>

    <div className={homeStyles.homePraticeAreasList} style={{background: theme.colorsBG.primary,}}>
      <div className="container">
        <p className={homeStyles.featureSummary}>Personal injury representation that can help you secure the best possible outcome to your situation.</p>
        <PraticeAreasList />
      </div>
    </div>

    <div className={homeStyles.homeBlogLatestPost} style={{ background: theme.colorsBG.secondary, color: theme.colorsText.primary, }}>
      <div className="container">
      <div className={homeStyles.twoColumnsGrid}>
        <h2 className={homeStyles.blogTitle}>
          Read our latest Article
        </h2>
        <div className={homeStyles.blogCTA}>
         <ButtonCta
            url="/blog"
            title={"Blog"}
          />
        </div>
        </div>
      </div>
    </div>

    <div className={homeStyles.homeContact} style={{background: theme.colorsBG.primary, }}>
      <div className="container">
        <div className={homeStyles.twoColumnsGrid}>
          <div>
            <h2 className={homeStyles.contactTitle}>
              BTG in Tampa serves clients in Clearwater, Hillsborough County, Pinellas County and throughout Central Florida.
            </h2>
          </div>
          <div className={homeStyles.contactCTA}>
            <ButtonCta
              url="/contact"
              title={"Contact Us"}
            />
          </div>
        </div>

        <div className={homeStyles.customWaveBottom}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

      </div>
    </div>
  </Layout>
)

export default IndexPage
