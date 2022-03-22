import * as React from "react"
import styled from "styled-components"

const Title = styled.h1`
  padding-top: 1em;
  font-size: 1.62671rem;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 1px;
`
const Wave = styled.div`
  position: absolute;
  top: 1;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin-top: -33px;
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 20px;
    transform: rotateY(180deg);
    fill: #3D586B;
  }
`

const GlobalHero = (props) => (
  <div style={{ padding:`3rem 1rem 1rem`, background: `#1d3851`,}}>
    <div className="container">
      <Wave>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </Wave>
      <div>
        <Title>{props.title}</Title>
        <p>{props.summary}</p>
      </div>
    </div>
  </div>
)

export default GlobalHero
