import * as React from "react"
import CaseResultBtn from "./caseResultBtn"
import * as praticeAreasStyles from "./praticeAreasList.module.css"

const dataCaseResult = [
  {
    url: `/case-results/tampa-17-000-000-skylight-fall`,
    title: `$17,000,000`,
    description: `Fall From Skylight`,
  },
  {
    url: `/case-results/`,
    title: `$3,900,000`,
    description: `Motorcycle Accident`,
  },
  {
    url: `/case-results/`,
    title: `$3,900,000`,
    description: `Medical Malpractice`,
  },
  {
    url: `/case-results/`,
    title: `$2,250,000`,
    description: `Negligent Security`,
  },
  {
    url: `/case-results/`,
    title: `$1,610,000`,
    description: `Automobile Accident and Insurance Bad Faith`,
  },
  {
    url: `/case-results/`,
    title: `$1,300,000"`,
    description: `Motorcycle Accident`,
  },
  {
    url: `/case-results/`,
    title: `$1,196,858`,
    description: `Car Accident`,
  },
  {
    url: `/case-results/`,
    title: `$1,185,000`,
    description: `Premises Liability`,
  },
  {
    url: `/case-results/`,
    title: `$1,000,000`,
    description: `Automobile Accident`,
  },
  {
    url: `/case-results/`,
    title: `$350,000`,
    description: `Car Accident`,
  }
]

const CaseResultList = () => (
  <div className={praticeAreasStyles.sectionPadding}>
    <h2 className={praticeAreasStyles.title}>
      List of Our Winning Case Results
    </h2>
    <div className={praticeAreasStyles.wrapper}>
      {dataCaseResult.map(data => (
        <CaseResultBtn
          key={data.id}
          url={data.url}
          description={data.description}
          title={data.title}
        />
      ))}
    </div>
  </div>
)

export default CaseResultList
