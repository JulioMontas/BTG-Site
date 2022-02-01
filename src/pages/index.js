import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

import ButtonCta from "../components/buttonCta"
import CaseResultList from "../components/caseResultList"
import PraticeAreasList from "../components/praticeAreasList"
import AttorneyBtn from "../components/attorneyBtn";
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
      <Container>
        <h2 className={homeStyles.homeHeroTitle}>Securing The Results Our Clients Deserve</h2>
        <p className={homeStyles.homeHeroDescription}>Our goal is to secure the compensation you need to help rebuild your life.</p>
        <div className={homeStyles.homeHeroCTA}>
          <ButtonCta
            url="/contact/consultation/"
            title={"Free Consultation"}
          />
        </div>
      </Container>
    </div>

    <div className={homeStyles.caseResultList} style={{background: theme.colorsBG.primary, }}>
      <Container>
        <p className={homeStyles.featureSummary}>A serious injury can easily derail a person’s life. We know how to fight for our clients and win. Our goal is to secure the compensation you need to help rebuild your life.</p>
        <h2 className={homeStyles.featuresTitle}>List of case results</h2>
        <CaseResultList />
      </Container>
    </div>






    <div className={homeStyles.homeTheFirmBG} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary, }}>
      <Container>
        <div className={homeStyles.twoColumnsGrid}>



          <div className={homeStyles.avatorList}>
            <Avator />
            <Avator />
            <Avator />
            <Avator />
            <Avator />
          </div>

          <div className={homeStyles.avatorSummary}>
            <h2>Trial Lawyer Committed to Serving the Injured</h2>
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
      </Container>
    </div>





    <div className={homeStyles.homeTestimonial} style={{background: theme.colorsBG.primary, }}>
      <Container>
      <div className="wrapper">
      <h2>Testimonial</h2>
        <div className="image">
        {/*
          <StaticImage
            src="../images/testimonial.png"
            alt="Testimonial"
            placeholder="blurred"
            layout="fixed"
            width={355}
            height={309}
          />
          */}
        </div>
        <div className="cta">
          <ButtonCta
            url="/testimonial"
            title={"Testimonial"}
          />
        </div>
      </div>
      </Container>
    </div>

    <div className={homeStyles.homeAttorneyList} style={{background: theme.colorsBG.secondary, color: theme.colorsText.primary, }}>
      <Container>
        <h2 className="title">
          Meet Our Attorneys
        </h2>
        <div className="wrapper">
          <AttorneyBtn />
          <AttorneyBtn />
          <AttorneyBtn />
          <AttorneyBtn />
          <AttorneyBtn />
        </div>
      </Container>
    </div>

    <div className={homeStyles.homePraticeAreasList} style={{background: theme.colorsBG.primary, }}>
      <Container>
        <p className={homeStyles.featureSummary}>We offer effective personal injury representation that can help you secure the best possible outcome to your situation.</p>
        <h2 className={homeStyles.featuresTitle}>List of pratice areas</h2>
        <PraticeAreasList />
      </Container>
    </div>

    <div className={homeStyles.homeBlogLatestPost} style={{ background: theme.colorsBG.secondary, color: theme.colorsText.primary, }}>
      <Container>
      <div className={homeStyles.twoColumnsGrid}>
        <h2>
          Blog
        </h2>
         <ButtonCta
            url="/blog"
            title={"Blog"}
          />
        </div>
      </Container>
    </div>

    <div className={homeStyles.homeContact} style={{background: theme.colorsBG.primary, }}>
      <Container>
        <div className={homeStyles.twoColumnsGrid}>
          <div>
            <h2 className="title">
              BTG in Tampa serves clients in Clearwater, Hillsborough County, Pinellas County and throughout Central Florida.
            </h2>
          </div>
          <div className="cta">
            <ButtonCta
              url="/contact"
              title={"Contact Us"}
            />
          </div>
        </div>
      </Container>
    </div>

  </Layout>
)

export default IndexPage
