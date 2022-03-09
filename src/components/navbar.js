import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled, { createGlobalStyle } from "styled-components"

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  div {
    width: 1.5rem;
    height 0.20rem;
    background: #bca360;
    border-radios: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
    }
    :nth-child(2) {
      opacity: ${({nav}) => nav ? '0' : '1'}
    }
    :nth-child(3) {
      transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column:
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 80%;
  background: #1d3851;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 300ms;
  z-index: 50;
  filter: drop-shadow(0px 0px 5px #333);
  transform: ${({nav}) => (nav ? "translateX(0)": "translateX(100%)")};
  ul {
    list-style-type:none;
    margin: 0 auto;
  }
  li{
    margin-top: 2rem;
    @media (min-width: 768px) {
      margin-top: 3rem;
    }
  }
  a{
    letter-spacing: 1px;
    font-size: 1.5rem;
    color: #BCA360;
    text-decoration: none;
    transition: color 300ms;
    :hover{
      color:#A78D49;
    }
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  @media (min-width: 768px) {
    width: 100%;
    border: 10px solid #BCA360;
  }
`
const Navbar = () => {

  const [nav, showNav] = useState(false)
  return(
    <div>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <AniLink cover direction="left" to="/about-us" bg="#3d586b">
              About Us
            </AniLink>
          </li>
          <li>
            <AniLink cover direction="left" to="/services" bg="#3d586b">
              Services
            </AniLink>
          </li>
          <li>
            <AniLink cover direction="left" to="/testimonial-and-case-study" bg="#3d586b">
              Testimonial & Case Study
            </AniLink>
          </li>
          <li>
            <AniLink cover direction="left" to="/guide-and-resources" bg="#3d586b">
              Guide & Resources
            </AniLink>
          </li>
          <li>
            <AniLink cover direction="left" to="/contact" bg="#3d586b">
              Contact Us
            </AniLink>
          </li>
          <li>
            <a href="tel:5554280940">813-251-0777</a>
          </li>
          <li>
            <address>
              <span>Tampa, Florida Attorneys (FL)</span>
            </address>
          </li>
        </ul>
      </MenuLinks>
    </div>
  )
}

export default Navbar;
