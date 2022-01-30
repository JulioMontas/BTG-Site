import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "./container"
import "./footer.css"

const Footer = () => (
  <footer>
    <Container>
      <p>
        © {new Date().getFullYear()}, Barnes Trial Group. All Rights Reserved. Attorney Advertising. Past results do not guarantee future outcome.
      </p>
    </Container>
  </footer>
)

export default Footer
