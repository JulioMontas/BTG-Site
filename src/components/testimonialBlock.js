import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from "styled-components"

const Card = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  img{
    margin: 0 auto;
    border-radius: 100%;
    border: 4px solid red;
  }
  h2{
    font-size: 21px;
    line-height: 155%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  small{
    font-size: 14px;
    line-height: 155%;
    letter-spacing: 1px;
  }
  p{
    font-size: 1em;
    line-height: 155%;
    margin: 1em 0 2em;
  }
  @media (min-width: 992px) {
    width: 525px;
  }
`

const TestimonialBlock = (props) => {
  return (
    <Card>
      <GatsbyImage image={props.image}/>
      <h2>{props.title}</h2>
      <small>{props.date}</small>
      <p><b>"</b>{props.quote}<b>"</b></p>
    </Card>
  )
}

export default TestimonialBlock
