import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"

import ButtonCta from "../components/buttonCta"
import CaseResultBtn from "../components/caseResultBtn"
import AttorneyBtn from "../components/attorneyBtn";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="hero">
      <Container>
        <div className="hero-content">
          <h2>Securing The Results Our Clients Deserve</h2>
          <p>Our goal is to secure the compensation you need to help rebuild your life.</p>
        </div>
        <div className="hero-cta">
          <ButtonCta
            url="/contact/consultation/"
            title={"Free Consultation"}
          />
        </div>
      </Container>
    </div>

    <div className="praticeAreasList">
      <Container>
        <div className="summary">
          <p>We offer effective personal injury representation that can help you secure the best possible outcome to your situation.</p>
        </div>
        <h2>List of pratice areas</h2>
        <div className="wrapper">
          <CaseResultBtn
            url="/"
            description={"Personal Injury"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum lacus ac odio."}
          />
          <CaseResultBtn
            url="/"
            description={"Medical Malpractice"}
            title={"Navigating intricate and time-sensitive law to help victims of preventable medical error."}
          />
          <CaseResultBtn
            url="/"
            description={"Spinal Cord & Brain Injury"}
            title={"Discovering the nature of complex brain injury and those accountable for costs of care."}
          />
          <CaseResultBtn
            url="/"
            description={"Nursing Home Abuse"}
            title={"Advocating for loved ones who have been abused or neglected in elder care facilities."}
          />
          <CaseResultBtn
            url="/"
            description={"Negligent Security & Property Maintenance"}
            title={"Identifying failed security measures and holding accountable those responsible."}
          />
          <CaseResultBtn
            url="/"
            description={"Automobile Accidents"}
            title={"Securing superior recoveries to compensate for loss and protect against further harm."}
          />
          <CaseResultBtn
            url="/"
            description={"Boating & Diving Accidents"}
            title={"Providing guidance on rights under maritime law to those injured in water activities."}
          />
          <CaseResultBtn
            url="/"
            description={"Trucking Accidents"}
            title={"Unraveling the complex web of responsibility in commercial vehicle accidents."}
          />
          <CaseResultBtn
            url="/"
            description={"Zantac Recall Litigation"}
            title={"Assisting those who have become ill after using ranitidine (Zantac) products."}
          />
        </div>
      </Container>
    </div>

    <div className="firm">
      <Container>
        <div className="wrapper">
          <div className="avatorList">
          {/* <AvatorList /> */}
          </div>
          <div className="summary">
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

    <div className="testimonial">
      <Container>
      <div className="wrapper">
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

    <div className="attorneyList">
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

    <div className="caseResultList">
      <Container>
        <div className="summary">
          <p>A serious injury can easily derail a person’s life. We know how to fight for our clients and win. Our goal is to secure the compensation you need to help rebuild your life.</p>
        </div>
        <h2>List of case results</h2>
        <div className="wrapper">
          <CaseResultBtn
            url="/"
            amount={"$17,000,000"}
            title={"Fall From Skylight"}
          />
          <CaseResultBtn
            url="/"
            amount={"$3,900,000"}
            title={"Motorcycle Accident"}
          />
          <CaseResultBtn
             url="/"
             amount={"$3,900,000"}
             title={"Medical Malpractice"}
          />
          <CaseResultBtn
             url="/"
             amount={"$2,250,000"}
             title={"Negligent Security"}
          />
          <CaseResultBtn
             url="/"
             amount={"$1,610,000"}
             title={"Automobile Accident and Insurance Bad Faith"}
          />
          <CaseResultBtn
             url="/"
             amount={"$1,300,000"}
             title={"Motorcycle Accident"}
          />
          <CaseResultBtn
             url="/"
             amount={"$1,196,858"}
             title={"Car Accident"}
          />
          <CaseResultBtn
             url="/"
             amount={"$1,185,000"}
             title={"Premises Liability"}
          />
          <CaseResultBtn
             url="/"
             amount={"$1,000,000"}
             title={"Automobile Accident"}
          />
          <CaseResultBtn
             url="/"
             amount={"$350,000"}
             title={"Car Accident"}
          />
        </div>
      </Container>
    </div>

    <div className="blogLatestPost">
      <Container>
        <h2>
          Blog
        </h2>
        <div>
         <ButtonCta
            url="/blog"
            title={"Blog"}
          />
        </div>
      </Container>
    </div>

    <div className="contact">
      <Container>
        <div className="wrapper">
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
