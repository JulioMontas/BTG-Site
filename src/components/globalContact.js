import * as React from "react"
import ButtonCta from "./buttonCta"
import * as globalContactStyles from "./globalContact.module.css"

const theme = {
  colorsBG: {
    primary: `#1d3851`,
    secondary: `#FFF`,
  },
  colorsText: {
    primary: `#333`,
    secondary: `#FFF`,
  },
}

const GlobalContact = (props) => (
  <div
    className={globalContactStyles.sectionPadding}
    style={{
      background: theme.colorsBG.primary, color: theme.colorsText.secondary,
      borderTop:`1px solid rgba(188, 163, 96, 0.2)` 
  }}>
    <div className="container">
      <div className="twoColumnsGrid">
        <div>
          <h2 className={globalContactStyles.title}>
            BTG in Tampa serves clients in Clearwater, Hillsborough County, Pinellas County and throughout Central Florida.
          </h2>
        </div>
        <div className={globalContactStyles.cta}>
          <ButtonCta
            url="/contact"
            title={"Contact Us"}
          />
        </div>
      </div>
      <div className={globalContactStyles.wave__Bottom}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  </div>
)

export default GlobalContact
