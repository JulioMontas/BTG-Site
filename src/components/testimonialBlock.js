import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from 'gatsby-plugin-image'
import ButtonCta from "./buttonCta"
import * as Styles from "./testimonialBlock.module.css"

const TestimonialBlock = (props) => {
  return (
    <div className={Styles.cardTestimonial}>
      <GatsbyImage image={props.image} className={Styles.cardTestimonial__img}/>
      <h3 className={Styles.cardTestimonial__title}>{props.title}</h3>
      <small className={Styles.cardTestimonial__date}>{props.date}</small>
      <p className={Styles.cardTestimonial__quote}><b>"</b>{props.quote}<b>"</b></p>
      <ButtonCta
        url="/testimonial"
        title="Read more testimonial"
      />
    </div>
  )
}

export default TestimonialBlock
