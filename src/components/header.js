import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from "./container"
import "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
  <Container>

    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `baseline`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul
      style={{
        display: `flex`,
      }}
      >
        <li>
          <Link to="/about">
            The Firm
          </Link>
        </li>
        <li>
          <Link to="/case-results">
            Case Results
          </Link>
        </li>
        <li>
          <Link to="/practice-areas">
            Pratice Areas
          </Link>
        </li>
        <li>
          <Link to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>



    </div>

    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
