import * as React from "react"
import PropTypes from "prop-types"
import CaseResultBtn from "./caseResultBtn"
import * as praticeAreasStyles from "./praticeAreasList.module.css"

const dataCaseResult = [
  {
    url: `/`,
    title: `$17,000,000`,
    description: `Fall From Skylight`,
  },
  {
    url: `/`,
    title: `$3,900,000`,
    description: `Motorcycle Accident`,
  },
  {
    url: `/`,
    title: `$3,900,000`,
    description: `Medical Malpractice`,
  },
  {
    url: `/`,
    title: `$2,250,000`,
    description: `Negligent Security`,
  },
  {
    url: `/`,
    title: `$1,610,000`,
    description: `Automobile Accident and Insurance Bad Faith`,
  },
  {
    url: `/`,
    title: `$1,300,000"`,
    description: `Motorcycle Accident`,
  },
  {
    url: `/`,
    title: `$1,196,858`,
    description: `Car Accident`,
  },
  {
    url: `/`,
    title: `$1,185,000`,
    description: `Premises Liability`,
  },
  {
    url: `/`,
    title: `$1,000,000`,
    description: `Automobile Accident`,
  },
  {
    url: `/`,
    title: `$350,000`,
    description: `Car Accident`,
  }
]

const CaseResultList = () => (
  <div className={praticeAreasStyles.wrapper}>
    {dataCaseResult.map(data => (
      <CaseResultBtn
        key={data.id}
        url="/"
        description={data.title}
        title={data.description}
      />
    ))}
  </div>
)

export default CaseResultList
