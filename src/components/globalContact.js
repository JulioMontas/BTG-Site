import * as React from "react"
import ButtonCta from "./buttonCta"
import styled from "styled-components"

const Section = styled.div`
  padding: 5.5rem 1rem 6rem;
`
const Title = styled.h2`
  letter-spacing: 0.02em;
  font-weight: normal;
  font-size: 2em;
  line-height: 150%;
`
const WaveBottom = styled.div`
  position: absolute;
  top: 1;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  margin-top: 96px;
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 30px;
    fill: #1d3851;
  }
`
const ButtonLink = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

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
  <Section
    style={{
      background: theme.colorsBG.primary, color: theme.colorsText.secondary,
      borderTop:`1px solid rgba(188, 163, 96, 0.2)`
    }}>
    <div className="container">
      <div className="twoColumnsGrid">
        <div>
          <Title>
            BTG in Tampa serves clients in Clearwater, Hillsborough County, Pinellas County and throughout Central Florida.
          </Title>
        </div>
        <ButtonLink>
          <ButtonCta
            url="/contact"
            title={"Contact Us"}
          />
        </ButtonLink>
      </div>
      <WaveBottom>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </WaveBottom>
    </div>
  </Section>
)

export default GlobalContact
