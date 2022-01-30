import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./footer.css"

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()}, Barnes Trial Group. All Rights Reserved. Attorney Advertising. Past results do not guarantee future outcome.
  </footer>
)

export default Footer
