import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "./container"
import "./footer.css"

const Footer = ({ siteTitle }) => (
  <footer>
    <Container>
      © {new Date().getFullYear()}, Barnes Trial Group. All Rights Reserved. Attorney Advertising. Past results do not guarantee future outcome.
    </Container>
  </footer>
)

export default Footer
