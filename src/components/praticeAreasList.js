import * as React from "react"
import PropTypes from "prop-types"

import Container from "./container"
import CaseResultBtn from "./caseResultBtn"

import * as praticeAreasStyles from "./praticeAreasList.module.css"

const dataPraticeAreas = [
  {
    url: `/`,
    title: `Personal Injury`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum lacus ac odio`,
  },
  {
    url: `/`,
    title: `Medical Malpractice`,
    description: `Navigating intricate and time-sensitive law to help victims of preventable medical error`,
  },
  {
    url: `/`,
    title: `Spinal Cord & Brain Injury`,
    description: `Discovering the nature of complex brain injury and those accountable for costs of care`,
  },
  {
    url: `/`,
    title: `Nursing Home Abuse`,
    description: `Advocating for loved ones who have been abused or neglected in elder care facilities`,
  },
  {
    url: `/`,
    title: `Negligent Security & Property Maintenance`,
    description: `Identifying failed security measures and holding accountable those responsible`,
  },
  {
    url: `/`,
    title: `Automobile Accidents`,
    description: `Securing superior recoveries to compensate for loss and protect against further harm`,
  },
  {
    url: `/`,
    title: `Boating & Diving Accidents`,
    description: `Providing guidance on rights under maritime law to those injured in water activities`,
  },
  {
    url: `/`,
    title: `Trucking Accidents`,
    description: `Unraveling the complex web of responsibility in commercial vehicle accidents`,
  },
  {
    url: `/`,
    title: `Zantac Recall Litigation`,
    description: `Assisting those who have become ill after using ranitidine (Zantac) products`,
  }
]

const PraticeAreasList = () => (
  <div className={praticeAreasStyles.wrapper}>
    {dataPraticeAreas.map(data => (
      <CaseResultBtn
        key={data.id}
        url="/"
        description={data.title}
        title={data.description}
      />
    ))}
  </div>
)

export default PraticeAreasList
