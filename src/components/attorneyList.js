import React from "react"
import { Link } from 'gatsby'

import Avator from "./avator"

import * as attorneyListStyles from "./attorneyList.module.css"

const AttorneyList = (props) => {
  return (
    <div className={attorneyListStyles.wrapper}>

        <Link to="/attorneys/stephen-barnes/" className={attorneyListStyles.cta}>
            <Avator />
            <div className={attorneyListStyles.info}>
              <h3 className={attorneyListStyles.title}>Stephen A. Barnes</h3>
              <p className={attorneyListStyles.subTitle}>Tampa, Florida</p>
            </div>
            <ul className={attorneyListStyles.skills}>
              <li>Personal Injury</li>
              <li>Wrongful Death</li>
            </ul>
        </Link>

        <Link to="/attorneys/allen-pipkins/" className={attorneyListStyles.cta}>
            <Avator />
            <div className={attorneyListStyles.info}>
              <h3 className={attorneyListStyles.title}>Allen J. Pipkins, II</h3>
              <p className={attorneyListStyles.subTitle}>Tampa, Florida</p>
            </div>
            <ul className={attorneyListStyles.skills}>
              <li>Slip and Falls</li>
              <li>Premises Liability</li>
              <li>Personal Injury</li>
              <li>Construction Accidents</li>
              <li>Automobile Accidents</li>
            </ul>
        </Link>

        <Link to="/attorneys/john-trujillo/" className={attorneyListStyles.cta}>
            <Avator />
            <div className={attorneyListStyles.info}>
              <h3 className={attorneyListStyles.title}>John V. Trujillo, Jr.</h3>
              <p className={attorneyListStyles.subTitle}>Tampa, Florida</p>
            </div>
            <ul className={attorneyListStyles.skills}>
              <li>Personal Injury</li>
              <li>Wrongful Death</li>
            </ul>
        </Link>

        <Link to="/attorneys/christopher-donegan/" className={attorneyListStyles.cta}>
            <Avator />
            <div className={attorneyListStyles.info}>
              <h3 className={attorneyListStyles.title}>Christopher J. Donegan, Esq.</h3>
              <p className={attorneyListStyles.subTitle}>Tampa, Florida</p>
            </div>
        </Link>

        <Link to="/attorneys/adam-rieth/" className={attorneyListStyles.cta}>
            <Avator />
            <div className={attorneyListStyles.info}>
              <h3 className={attorneyListStyles.title}>Adam D. Rieth</h3>
              <p className={attorneyListStyles.subTitle}>Tampa, Florida</p>
            </div>

        </Link>
    </div>
  )
}

export default AttorneyList;
