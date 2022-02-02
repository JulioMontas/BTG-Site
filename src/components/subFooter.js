import * as React from "react"
import * as footerStyles from "./subFooter.module.css"

const SubFooter = () => (
  <div className={footerStyles.lastFooter}>
    <div className="container">
      <div className={footerStyles.subFooter}>
        <p>
          © {new Date().getFullYear()}, Barnes Trial Group. All Rights Reserved. Attorney Advertising. Past results do not guarantee future outcome.
        </p>
        <div>
          <p>How was your experience?</p>
          <a href="/" className={footerStyles.subFooterCTA}>Give feedback about our website</a>
        </div>
      </div>
    </div>
  </div>
)

export default SubFooter
