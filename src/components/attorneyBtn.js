import React from "react"
import { Link } from 'gatsby'
import "./attorneyBtn.css"
// import Avator from "./avator"

const AttorneyBtn = (props) => {
  return (
    <div className="attorneyBtn">
      <Link to="/attorneys/don-chezina/">
        <div>
          {/* <Avator /> */}
          <h3>Stephen A. Barnes</h3>
          <p>Tampa, Florida</p>
        </div>
        <ul>
          <li>Personal Injury</li>
          <li>Wrongful Death</li>
          <li>Automobile Accidents</li>
          <li>Construction Accidents</li>
        </ul>
      </Link>
    </div>
  )
}

export default AttorneyBtn;
